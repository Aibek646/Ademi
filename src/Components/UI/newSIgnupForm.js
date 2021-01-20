import React, { Component } from "react";
import "./SignUp.css";
import Input from "../UI/Input";
import Aux from "../../hoc/Aux";
import Button from "../../Components/UI/buttonAdd";
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
    axios
      .post("https://ademi-bf204-default-rtdb.firebaseio.com/people.json", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
    console.log(formElementsArray);
    return (
      <div className="signUp-bg">
        <button onClick={this.props.closed} className="x">
          X
        </button>
        <div className="signUp-intro">
          <p>Logo</p>

          <p>Join our Red Tab™ program and get free shipping on every order.</p>
          <p>
            Levi’s® Red Tab™ Members get exclusive access to products, events,
            and offers. Just provide a few details. It’s free to join  and open
            to all.
          </p>
        </div>
        <div className="input-field">
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
        </div>
      </div>
    );
  }
}

export default SignUp;
