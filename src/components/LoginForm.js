import React, { Component } from "react";

import TextInput from "./TextInput";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  };

  render() {
    const errors = this.props.errors || {};
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns">
                <div className="column" />
                <div className="column is-half">
                  <div className="box">
                    <figure className="image is-48x48" style={{ margin: "0 auto"}}>
                      <img alt="logo" src="img/mez.png" />
                    </figure>
                    <h1 className="title">Log In</h1>
                    <form onSubmit={this.onSubmit}>
                      {errors.non_field_errors ? (
                        <div>{errors.non_field_errors}</div>
                      ) : (
                        ""
                      )}
                      <TextInput
                        name="username"
                        label="Username"
                        error={errors.username}
                        onChange={this.handleInputChange}
                      />
                      <TextInput
                        name="password"
                        label="Password"
                        error={errors.password}
                        type="password"
                        onChange={this.handleInputChange}
                      />
                      <button className="button is-primary" type="submit">Log In</button>
                    </form>
                    <p>By continuing, you agree to Mezcal's Terms of Service</p>
                    <p>Forgot password?</p>
                    <p>Don't have an account? Sign up.</p>
                  </div>
                </div>
                <div className="column" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
