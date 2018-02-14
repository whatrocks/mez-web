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
        <form onSubmit={this.onSubmit}>
          <h1>Sign up now</h1>
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
          Sign Up
          </button>
        </form>
      </div>
    )
  }
}

