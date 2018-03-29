import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contacts from "../containers/Contacts";
import ContactNew from "../containers/ContactNew";
import Contact from "../containers/Contact";
import Email from "../containers/Email";
import Footer from "./Footer";
import MezEvents from "../containers/MezEvents";
import MezEventNew from "../containers/MezEventNew";
import MezEvent from "../containers/MezEvent";
import PrivateRoute from "../containers/PrivateRoute";

import '../styles/global.scss';

class App extends Component {
  
  state = {
    showNav: false,
  }

  render() {
    const { handleLogout } = this.props;
    const { showNav } = this.state;
    return (
      <div className="site">
        <nav className="navbar tan-bg">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/">
                <div className="level-left">
                  <h1 className="level-item title logo">Mezcal</h1>
                </div>
              </Link>
              <div 
                className={`navbar-burger ${showNav ? 'is-active' : ''}`}
                onClick={() => this.setState({ showNav: !showNav})}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={`navbar-menu ${showNav ? 'is-active' : ''}`}>
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
            <PrivateRoute exact path="/contacts/new" component={ContactNew} />
            <PrivateRoute path="/contacts/:id" component={Contact} />
            <PrivateRoute exact path="/emails" component={Email} />
            <PrivateRoute exact path="/events" component={MezEvents} />
            <PrivateRoute exact path="/events/new" component={MezEventNew} />
            <PrivateRoute path="/events/:id" component={MezEvent} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
