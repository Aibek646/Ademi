import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../Components/UI/Spinner";
import MenCard from "../../Components/UI/MenCard";
import Aux from "../../hoc/Aux";
import Button from "../../Components/UI/buttonAdd";
import "./SinglePage.css";
import Modal from "../../Components/UI/Modal";
import { FaThumbsDown } from "react-icons/fa";

class SinglePage extends Component {
  state = {
    loadedPage: null,
    error: false,
    ordering: false,
    modal: false,
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

  // addToBag = () => {
  //   this.props.history.push({
  //     pathname: `/checkout/${this.props.match.params.id}`,
  //   });
  // };

  openModal = () => {
    this.setState(
      {
        modal: !this.state.modal,
      },
      () => {
        setTimeout(() => {
          this.closeModal();
        }, 4000);
      }
    );
  };

  closeModal = () => {
    this.setState({
      modal: false,
    });
  };

  postShirts = (event) => {
    event.preventDefault();
    const order = {
      shirt: this.state.loadedPage,
    };
    axios
      .post(
        "https://ademi-bf204-default-rtdb.firebaseio.com/orders.json/",
        order
      )
      .then((res) => {
        this.setState({ ordering: false });
      })
      .catch((err) => console.log(err));
    this.setState({ ordering: true });
    this.openModal();
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
                {this.state.ordering ? (
                  <Button>
                    <Spinner />
                  </Button>
                ) : (
                  <Button clickedBtn={this.postShirts}>ADD TO BAG</Button>
                )}
              </div>
            </div>
            <Modal show={this.state.modal} />
          </div>
        </Aux>
      );
    }

    return page;
  }
}

export default SinglePage;
