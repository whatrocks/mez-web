import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Your calendar feed, built for people who forget things.
          </h1>
          <h2 className="subtitle">
            Schedule emails, text messages, Facebook posts, or Tweets
          </h2>
          <Link to="/signup" className="button is-primary">
            Sign Up For Free
          </Link>
        </div>
      </div>
    </section>
    <section className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Schedule your communications, on your own time.
          </h1>
          <h2 className="subtitle">
            Forget about forgetting about your dad's birthday
          </h2>
        </div>
      </div>
    </section>
  </div>
);
