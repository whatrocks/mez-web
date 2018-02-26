import { connect } from "react-redux";
import Email from "../components/Email";
import { accessToken } from "../redux/auth/selectors";
import { getEmails } from "../redux/email/selectors";

function mapStateToProps(state) {
  return {
    emails: getEmails(state),
    accessToken: accessToken(state)
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Email);
