import React, { Component } from "react";
import "./Login.css";
import Input from "../../Components/UI/Input";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../store/actions/index";
import Spinner from "../../Components/UI/Spinner";

class Login extends Component {
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
          placeholder: "password",
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

  signUpHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.signUpForm) {
      formData[formElementIdentifier] = this.state.signUpForm[
        formElementIdentifier
      ].value;
    }

    const data = {
      orderData: formData,
    };
    this.props.onLogin(data, this.state.isSignup);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedSignUpForm = {
      ...this.state.signUpForm,
    };
    const updatedFormElement = {
      ...updatedSignUpForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedSignUpForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifiers in updatedSignUpForm) {
      formIsValid = updatedSignUpForm[inputIdentifiers].valid && formIsValid;
    }
    this.setState({
      signUpForm: updatedSignUpForm,
      formIsValid: formIsValid,
    });
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    return isValid;
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.signUpForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signUpForm[key],
      });

      return (
        <div className="background-modal">
          <div
            className="login-bg"
            style={{
              visibility: this.props.show ? "visible" : "hidden",
              opacity: this.props.show ? "1" : "0",
            }}
          >
            <button onClick={this.props.closed} className="x">
              X
            </button>
            <div className="login-intro">
              <p>Logo</p>
              <p>
                Join our Red Tab™ program and get free shipping on every order.
              </p>
              <p>
                Levi’s® Red Tab™ Members get exclusive access to products,
                events, and offers. Just provide a few details. It’s free to
                join  and open to all.
              </p>
            </div>
            <form className="login-field">
              {formElementsArray.map((formElement) => {
                return <Input />;
              })}
              <button onClick={this.signUpHandler}>Login</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (orderData, isSignup) =>
      dispatch(actions.auth(orderData, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
