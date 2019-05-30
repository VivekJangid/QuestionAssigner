import React, { Component, Fragment } from "react";
import Header from "./components/layout/header";
import Assignment from "./components/assignment/assignment";
import { Provider } from "react-redux";
import Login from "./components/accounts/Login";
import store from "./store";
import PrivateRoutes from "./components/common/PrivateRoutes";
import { loadUser } from "./actions/auth";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoutes exact path="/" component={Assignment} />
                <Route exact path="/" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
