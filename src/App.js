import React from "react";
import Layout from "./Containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Men from "./Containers/Men/MenPage";
import Main from "./Containers/Main";
import SinglePage from "./Containers/Men/SinglePage";
import Checkout from "./Containers/Checkout/Checkout";
import Logout from "./Containers/Auth/Logout";

function App() {
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

export default App;
