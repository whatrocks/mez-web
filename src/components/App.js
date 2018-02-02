import React, { Component } from "react";
// import { Link, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div>
        <h1>hello</h1>
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

export default App