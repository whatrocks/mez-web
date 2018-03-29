import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Home extends PureComponent {
  
  state = {
    hovering: false,
    mez: "img/mez/mez.png"
  }

  hoverHandler({ hovering }) {
    const path = hovering ? "img/mez/tongue.png" : "img/mez/mez.png"
    this.setState({ hovering, mez: path })
  }

  render() {
    const { mez } = this.state;
    return (
      <section className="hero is-medium landing-bg">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-one-third">
                <figure
                  className="image"
                  onMouseOver={() => this.hoverHandler({ hovering: true })}
                  onMouseOut={() => this.hoverHandler({ hovering: false })}
                >
                  <img alt="logo" src={mez} />
                </figure>
              </div>
              <div className="column">
                <h1 className="title hero-header">Forget "Sorry, I forgot."</h1>
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
    );
  }
}

export default Home;
