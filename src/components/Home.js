import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-one-third">
              <div className="blinky">
                <div className="eyes">
                  <div className="eye" />
                  <div className="eye" />
                </div>
                  <img  className="mez" alt="logo" src="img/eyeless.png" />
              </div>
            </div>
            <div className="column">
              <h1 className="title">
                A new sort of calendar, built for people who forget things.
              </h1>
              <h2 className="subtitle">
                Schedule emails, text messages, Facebook posts, or Tweets
              </h2>
              <Link to="/signup" className="button is-primary">
                Sign Up For Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
