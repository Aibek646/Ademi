import React, { Component } from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import Button from "../../Components/UI/buttonAdd";
import axios from "axios";
import * as actionCreators from "../../store/actions/index";

class Checkout extends Component {
  state = {
    // initPrice: 89,
    // price: 89,
    // count: 1,
  };

  // addShirt = () => {
  //   const oldPrice = this.state.price;
  //   const updatedPrice = oldPrice + this.state.initPrice;
  //   const oldCount = this.state.count;
  //   const updatedCount = oldCount + 1;
  //   this.setState({
  //     price: updatedPrice,
  //     count: updatedCount,
  //   });
  // };

  // removeShirt = () => {
  //   const oldPrice = this.state.price;
  //   const updatedPrice = oldPrice - this.state.initPrice;
  //   const oldCount = this.state.count;
  //   if (oldCount <= 1) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   this.setState({
  //     price: updatedPrice,
  //     count: updatedCount,
  //   });
  // };

  componentDidMount() {
    axios
      .get(
        `https://ademi-bf204-default-rtdb.firebaseio.com/cards/${this.props.match.params.id}.json`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log);
  }

  render() {
    console.log(this.props.match.params.id);
    let disabledInfo = null;
    if (this.props.count <= 1) {
      disabledInfo = true;
    }
    return (
      <div className="block-checkout">
        <div className="block-checkout-1">
          <img src="/images/polo.jpeg" />
          <div className="block-1-div">
            <p>Ademi Polo</p>
            <p>Classic Fit Soft Cotton Polo Shirt</p>
            <p>Color: Hampton Pink Heather</p>
            <p>Size: S</p>
            <div className="addShirtBtns">
              <div className="number">{this.props.count}</div>
              <button
                disabled={disabledInfo}
                onClick={this.props.onCountRemoved}
                className="less"
              >
                Remove
              </button>
              <button onClick={this.props.onCountAdded} className="more">
                Add
              </button>
            </div>

            <p id="price">price:{this.props.price}$</p>
          </div>
        </div>
        <div className="block-checkout-2">
          <p>Subtotal</p>
          <p>shipping</p>
          <p>estimated Total</p>
          <Button>Pay</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.checkout.price,
    count: state.checkout.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountAdded: () => dispatch(actionCreators.addShirt()),
    onCountRemoved: () => dispatch(actionCreators.removeShirt()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
