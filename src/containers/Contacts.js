import { connect } from "react-redux";
import Contacts from "../components/Contacts";
import { getContacts } from "../redux/contactList/selectors";
import * as actions from "../redux/contactList/actions";

function mapStateToProps(state) {
  return {
    contacts: getContacts(state)
  };
}

const mapDispatchToProps = dispatch => ({
  requestContacts: () => {
    dispatch(actions.requestContacts())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
