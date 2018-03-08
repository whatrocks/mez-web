import { connect } from "react-redux";
import Contact from "../components/Contact";
import { getContact } from "../redux/contactDetail/selectors";
import * as actions from "../redux/contactDetail/actions";

function mapStateToProps(state) {
  return {
    contact: getContact(state)
  };
}

const mapDispatchToProps = dispatch => ({
  requestContact: ({ id }) => {
    dispatch(actions.requestContact({ id }))
  },
  onUpdateContact: ({ id, details }) => {
    dispatch(actions.putContact({ id, details }))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);