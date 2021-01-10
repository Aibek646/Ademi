import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../Components/UI/Spinner";
import MenCard from "../../Components/UI/MenCard";
import Aux from "../../hoc/Aux";
import Button from "../../Components/UI/buttonAdd";
import "./SinglePage.css";

class SinglePage extends Component {
  state = {
    loadedPage: null,
    error: false,
    ordering: false,
  };

  componentDidMount() {
    axios
      .get(
        `https://ademi-bf204-default-rtdb.firebaseio.com/cards/${this.props.match.params.id}.json`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ loadedPage: res.data });
      })
      .catch((err) => this.setState({ error: true }));
  }

  addToBag = () => {
    this.props.history.push("/checkout");
  };

  render() {
    let page = this.state.error ? <Spinner /> : <p>Page can not be loaded</p>;

    if (this.state.loadedPage) {
      page = (
        <Aux>
          <div>
            <div className="single-page">
              <img className="block-1 box" src={this.state.loadedPage.image} />
              <img className="block-2 box" src={this.state.loadedPage.image2} />
              <div className="block-3 box">
                <p>Polo Ralph Lauren</p>
                <p>Soft Cotton Polo Shirt - All Fits</p>
                <p>$89.50</p>
                <p>color</p>
                <Button clickedBtn={this.addToBag}>ADD TO BAG</Button>
              </div>
            </div>
          </div>
        </Aux>
      );
    }

    return page;
  }
}

export default SinglePage;
