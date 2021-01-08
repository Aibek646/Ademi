import React, { Component } from "react";
import "./Checkout.css";
import Button from "../../Components/UI/buttonAdd";

class Checkout extends Component {
  state = {
    initPrice: 89,
    price: 89,
    count: 1,
  };

  addShirt = () => {
    const oldPrice = this.state.price;
    const updatedPrice = oldPrice + this.state.initPrice;
    const oldCount = this.state.count;
    const updatedCount = oldCount + 1;
    this.setState({
      price: updatedPrice,
      count: updatedCount,
    });
  };

  removeShirt = () => {
    const oldPrice = this.state.price;
    const updatedPrice = oldPrice - this.state.initPrice;
    const oldCount = this.state.count;
    if (oldCount <= 1) {
      return;
    }
    const updatedCount = oldCount - 1;
    this.setState({
      price: updatedPrice,
      count: updatedCount,
    });
  };

  render() {
    let disabledInfo = null;
    if (this.state.count <= 1) {
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
              <div className="number">{this.state.count}</div>
              <button
                disabled={disabledInfo}
                onClick={this.removeShirt}
                className="less"
              >
                Remove
              </button>
              <button onClick={this.addShirt} className="more">
                Add
              </button>
            </div>

            <p id="price">price:{this.state.price}$</p>
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

export default Checkout;
