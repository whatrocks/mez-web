import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Email from "../components/Email";
import * as EmailActions from "../actions/email";
import { accessToken } from "../reducers";

function mapStateToProps(state) {
  return {
    emails: state.email.emails,
    accessToken: accessToken(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EmailActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Email);
