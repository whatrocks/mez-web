import { connect } from "react-redux";
import MezEvent from "../components/MezEvent";
import { getEvent } from "../redux/eventDetail/selectors";
import * as actions from "../redux/eventDetail/actions";
import { getUserId } from "../redux/auth/selectors";

function mapStateToProps(state) {
  return {
    event: getEvent(state),
    userId: getUserId(state)
  };
}

const mapDispatchToProps = dispatch => ({
  requestEvent: ({ id }) => {
    dispatch(actions.requestEvent({ id }))
  },
  onUpdateEvent: ({ id, details }) => {
    dispatch(actions.putEvent({ id, details }))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MezEvent);
