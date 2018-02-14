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
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    const errors = this.props.errors || {};
    return (
      <div>
         <section className="hero is-large">
            <div className="hero-body">
              <div className="container has-text-centered">
                <form onSubmit={this.onSubmit}>
                  <h1>Log In</h1>
                  {
                    errors.non_field_errors ?
                    <div>{errors.non_field_errors}</div>
                    : ""
                  }
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
                  <button type="submit">
                  Log In
                  </button>
                </form>
                <p>By continuing, you agree to Mezcal's Terms of Service</p>
                <p>Forgot password?</p>
                <p>Don't have an account? Sign up.</p>
              </div>
            </div>
          </section>
      </div>
    )
  }
}

