import React, { Component, Fragment } from "react";
import Header from "./components/layout/header";
import Assignment from "./components/assignment/assignment";
import NewAssignment from "./components/assignment/newassignment";
import { Provider } from "react-redux";
import Login from "./components/accounts/Login";
import SingleAssignment from "./components/assignment/singleassignment";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import { loadUser } from "./actions/auth";
import DeleteSkill from "./components/skills/deleteskill";
import Uploadzip from "./components/SaveZip/uploadzip";
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
                <Route exact path="/login" component={Login} />
                <Route exact path="/uploadfile" component={Uploadzip} />
                <PrivateRoute exact path="/" component={Assignment} />
                <PrivateRoute
                  exact
                  path="/a/:id"
                  component={SingleAssignment}
                />
                <PrivateRoute
                  exact
                  path="/newassignment"
                  component={NewAssignment}
                />
                <PrivateRoute
                  exact
                  path="/deleteskill"
                  component={DeleteSkill}
                />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
