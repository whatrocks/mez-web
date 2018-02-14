import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import SignupForm from "../components/SignupForm";
import { signup } from "../actions/auth";
import { authErrors, isAuthenticated } from "../reducers";

const Signup = (props) => {
  if (props.isAuthenticated) {
    return <Redirect to="/" />
  }
  return (
    <div className="signup-page">
      <SignupForm {...props} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => {
    dispatch(signup(username, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);