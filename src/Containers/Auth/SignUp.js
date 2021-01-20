import React, { Component } from "react";
import { connect } from "react-redux";
import "./SignUp.css";
import Input from "../../Components/UI/Input";
import * as actions from "../../store/actions/index";
import axios from "axios";

class SignUp extends Component {
  state = {
    signUpForm: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      secondName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Second Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
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
    isSignup: true,
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
    this.props.onSignUp(data, this.state.isSignup);
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

  render() {
    const formElementsArray = [];
    for (let key in this.state.signUpForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signUpForm[key],
      });
    }

    return (
      <div className="background-modal">
        <div
          className="signUp-bg"
          style={{
            visibility: this.props.show ? "visible" : "hidden",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <button onClick={this.props.closed} className="x">
            X
          </button>
          <div className="signUp-intro">
            <p>Logo</p>

            <p>
              Join our Red Tab™ program and get free shipping on every order.
            </p>
            <p>
              Levi’s® Red Tab™ Members get exclusive access to products, events,
              and offers. Just provide a few details. It’s free to join and open
              to all.
            </p>
          </div>
          <form className="input-field">
            {formElementsArray.map((formElement) => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) =>
                  this.inputChangedHandler(event, formElement.id)
                }
              />
            ))}
            <button onClick={this.signUpHandler}>Join</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (orderData, isSignup) =>
      dispatch(actions.auth(orderData, isSignup)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
