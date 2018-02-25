import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import SignupForm from "../components/SignupForm";
import { signup } from "../redux/auth/actions";
import { authErrors, isAuthenticated } from "../redux/auth/selectors";

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