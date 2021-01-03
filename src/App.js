import React from "react";
import Layout from "./Containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Men from "./Containers/Men/MenPage";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/men" component={Men} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
