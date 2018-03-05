import { connect } from "react-redux";
import Contact from "../components/Contact";
import { accessToken } from "../redux/auth/selectors";
import { getContacts } from "../redux/contact/selectors";
import * as actions from "../redux/contact/actions";

function mapStateToProps(state) {
  return {
    contacts: getContacts(state),
    accessToken: accessToken(state)
  };
}

const mapDispatchToProps = dispatch => ({
  requestContacts: () => {
    dispatch(actions.requestContacts())
  },
  onSubmitContact: (details) => {
    dispatch(actions.postContact(details))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
