import { connect } from "react-redux";
import Email from "../components/Email";
import { accessToken } from "../redux/auth/selectors";
import { getEmails } from "../redux/email/selectors";
import * as actions from "../redux/email/actions";


function mapStateToProps(state) {
  return {
    emails: getEmails(state),
    accessToken: accessToken(state)
  };
}

const mapDispatchToProps = dispatch => ({
  requestEmails: () => {
    dispatch(actions.requestEmails())
  },
  onSubmitEmail: (details) => {
    dispatch(actions.postEmail(details))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);
