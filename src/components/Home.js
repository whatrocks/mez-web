import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-one-third">
              <figure className="image is-square">
                <img alt="logo" src="img/mez/mez.png" />
              </figure>
            </div>
            <div className="column">
              <h1 className="title hero-header">
                Forget "Sorry, I forgot."
              </h1>
              <h2 className="subtitle hero-header">
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
