import { connect } from "react-redux";
import Contacts from "../components/Contacts";
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
