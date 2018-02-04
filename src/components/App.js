import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Email from "../containers/Email";

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Link to="/">Mezcalendar</Link>
        <Link to="/about">About</Link>
        <Link to="/emails">Emails</Link>
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
