import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contacts from "../containers/Contacts";
import Contact from "../containers/Contact";
import Email from "../containers/Email";
import Footer from "./Footer";
import MezEvents from "../containers/MezEvents";
import MezEvent from "../containers/MezEvent";
import PrivateRoute from "../containers/PrivateRoute";

import '../styles/global.scss';
import style from "./style.scss";

class App extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div className="site">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/">
                <div className="level-left">
                  <figure className="image is-48x48 level-item">
                    <img alt="logo" src="img/mez.png" />
                  </figure>
                  <h1 className="level-item title logo">Mezcal</h1>
                </div>
              </Link>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/contacts">
                  Contacts
                </Link>
                <Link className="navbar-item" to="/emails">
                  Emails
                </Link>
                <Link className="navbar-item" to="/events">
                  Events
                </Link>
                <Link className="navbar-item" onClick={handleLogout} to="/">
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <PrivateRoute exact path="/contacts" component={Contacts} />
            <PrivateRoute path="/contacts/:id" component={Contact} />
            <PrivateRoute exact path="/emails" component={Email} />
            <PrivateRoute exact path="/events" component={MezEvents} />
            <PrivateRoute path="/events/:id" component={MezEvent} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
