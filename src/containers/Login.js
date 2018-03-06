import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import { login } from "../redux/auth/actions";
import { authErrors, isAuthenticated } from "../redux/auth/selectors";

const Login = (props) => {
  if (props.isAuthenticated) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-page">
      <LoginForm {...props} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password) => {
    dispatch(login({ email, password }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);