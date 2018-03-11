import React from "react";

const Footer = () => (
  <footer className="footer">
  <div className="container">
    <div className="columns">
      <div className="column">
        <figure className="image is-48x48 level-item">
          <img alt="logo" src="img/mez.png" />
        </figure>
        <p>© 2018 Mezcal</p>
        <br />
        <p>Follow us</p>
        <div className="level-left">
          <div className="level-item">
            <a href="https://www.instagram.com/mezcalio/">
              <figure className="image is-24x24 level-item">
                <img alt="logo" src="img/instagram.svg" />
              </figure>
            </a>
          </div>
          <div className="level-item">
            <a href="https://www.twitter.com/mezcal_io/">
              <figure className="image is-24x24 level-item">
                <img alt="logo" src="img/twitter.svg" />
              </figure>
            </a>
          </div>
          <div className="level-item">
            <a href="https://www.facebook.com/mezcalio/">
              <figure className="image is-24x24 level-item">
                <img alt="logo" src="img/facebook.svg" />
              </figure>
            </a>
          </div>
        </div>
      </div>
      <div className="column" />
      <div className="column" />
    </div>
  </div>
</footer>
)

export default Footer;