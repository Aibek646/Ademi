import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../Components/UI/Spinner";
import Aux from "../../hoc/Aux";
import Button from "../../Components/UI/buttonAdd";
import "./SinglePage.css";
import Modal from "../../Components/UI/Modal";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class SinglePage extends Component {
  componentDidMount() {
    this.props.onInitSinglePage(this.props.match.params.id);
  }

  // openModal = () => {
  //   this.setState(
  //     {
  //       modal: !this.state.modal,
  //     },
  //     () => {
  //       setTimeout(() => {
  //         this.closeModal();
  //       }, 4000);
  //     }
  //   );
  // };

  // closeModal = () => {
  //   this.setState({
  //     modal: false,
  //   });
  // };

  postShirts = (event) => {
    event.preventDefault();
    const order = {
      shirt: this.props.loadedPage,
    };

    // axios
    //   .post(
    //     "https://ademi-bf204-default-rtdb.firebaseio.com/orders.json?",
    //     order
    //   )
    //   .then((res) => {
    //     this.setState({ ordering: false }, () => {
    //       this.setState({ ordering: true });
    //       this.openModal();
    //     });
    //   })
    //   .catch((err) => console.log(err));
    this.props.onInitPurchase(order, this.props.token);
  };

  render() {
    let page = this.props.error ? <Spinner /> : <p>Page can not be loaded</p>;

    if (this.props.loadedPage) {
      page = (
        <Aux>
          <div>
            <div className="single-page">
              <img className="block-1 box" src={this.props.loadedPage.image} />
              <img className="block-2 box" src={this.props.loadedPage.image2} />
              <div className="block-3 box">
                <p>Polo Ralph Lauren</p>
                <p>Soft Cotton Polo Shirt - All Fits</p>
                <p>$89.50</p>
                <p>color</p>
                {this.props.ordering ? (
                  <Button>
                    <Spinner />
                  </Button>
                ) : (
                  <Button clickedBtn={this.postShirts}>ADD TO BAG</Button>
                )}
              </div>
            </div>
            <Modal show={this.props.modal} />
          </div>
        </Aux>
      );
    }

    return page;
  }
}

const mapStateToProps = (state) => {
  return {
    loadedPage: state.singlePage.loadedPage,
    error: state.singlePage.error,
    ordering: state.singlePage.ordering,
    modal: state.singlePage.modal,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitSinglePage: (id) => dispatch(actions.initSinglePage(id)),
    onInitPurchase: (order, token) =>
      dispatch(actions.purchaseShirt(order, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
