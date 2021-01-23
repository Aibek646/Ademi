import React, { Component } from "react";
import "./Login2.css";
import Input from "../../Components/UI/Input";
import * as actions from "../../store/actions/index";
import Spinner from "../../Components/UI/Spinner";
import { connect } from "react-redux";

class Login2 extends Component {
  state = {
    signUpForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "password",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },

    formIsSent: false,
    isSignup: false,
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedSignUpForm = {
      ...this.state.signUpForm,
    };
    const updatedFormElement = {
      ...updatedSignUpForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedSignUpForm[inputIdentifier] = updatedFormElement;
    this.setState({
      signUpForm: updatedSignUpForm,
    });
  };

  signUpHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let forElementIdentifier in this.state.signUpForm) {
      formData[forElementIdentifier] = this.state.signUpForm[
        forElementIdentifier
      ].value;
    }
    const data = {
      orderData: formData,
    };
    this.props.onLogin(data, this.state.isSignup);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.signUpForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signUpForm[key],
      });
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    return (
      <div className="background-modal">
        <div
          className="big-login"
          style={{
            visibility: this.props.show ? "visible" : "hidden",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <button onClick={this.props.closed} className="button-x">
            X
          </button>
          <div className="intro-login">
            <p>
              News and Exclusive Offers! Sign up to receive email updates on
              special promotions, new product announcements, gift ideas and
              more.
              <p>
                Order History Receive important information about your order.
                You can even track it up to the minute it arrives. Faster
                Checkout Save your billing and shipping information to make it
                easier to buy your favorite gear. Read more about security
              </p>
            </p>
          </div>
          <div className="input-login">
            {errorMessage}
            {this.props.loading ? (
              <Spinner />
            ) : (
              formElementsArray.map((formElement) => {
                return (
                  <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => {
                      this.inputChangedHandler(event, formElement.id);
                    }}
                  />
                );
              })
            )}
            <button onClick={this.signUpHandler}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (orderData, isSignup) => {
      dispatch(actions.auth(orderData, isSignup));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login2);
