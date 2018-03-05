import { connect } from "react-redux";
import MezEvent from "../components/MezEvent";
import { accessToken } from "../redux/auth/selectors";
import { getEvents } from "../redux/event/selectors";
import * as actions from "../redux/event/actions";

function mapStateToProps(state) {
  return {
    events: getEvents(state),
    accessToken: accessToken(state)
  };
}

const mapDispatchToProps = dispatch => ({
  requestEvents: () => {
    dispatch(actions.requestEvents())
  },
  onSubmitEvent: (details) => {
    dispatch(actions.postEvent(details))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MezEvent);
