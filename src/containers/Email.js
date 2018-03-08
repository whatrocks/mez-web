import { connect } from "react-redux";
import Email from "../components/Email";
import { getEmails } from "../redux/emailList/selectors";
import * as actions from "../redux/emailList/actions";


function mapStateToProps(state) {
  return {
    emails: getEmails(state)
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
