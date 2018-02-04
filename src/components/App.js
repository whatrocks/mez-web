import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Email from "../containers/Email";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <h1 style={{ fontSize: "1.5rem" }}>Mezcalendar</h1>
              </Link>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link className="navbar-item" to="/about">
                  About
                </Link>

                <Link className="navbar-item" to="/emails">
                  Emails
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/emails" component={Email} />
        </Switch>
      </div>
    );
  }
}

// function PrivateRoute({ component: Component, authed, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         authed === true ? <Component {...props} /> : <Redirect to="/login" />}
//     />
//   );
// }

export default App;
