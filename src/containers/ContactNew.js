import { connect } from "react-redux";
import ContactNew from "../components/ContactNew";
import * as actions from "../redux/contactList/actions";

function mapStateToProps(state) {
  return { };
}

const mapDispatchToProps = dispatch => ({
  onSubmitContact: (details) => {
    dispatch(actions.postContact(details))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactNew);
