import React, { Component } from "react";
import Layout from "./Containers/Layout/Layout";
import { Route, Switch, withRouter } from "react-router-dom";
import Men from "./Containers/Men/MenPage";
import Main from "./Containers/Main";
import SinglePage from "./Containers/Men/SinglePage";
import Checkout from "./Containers/Checkout/Checkout";
import Logout from "./Containers/Auth/Logout";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSingup();
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/men/:id" component={SinglePage} />
            <Route path="/men" component={Men} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={Main} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSingup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
