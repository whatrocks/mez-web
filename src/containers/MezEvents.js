import { connect } from "react-redux";
import MezEvents from "../components/MezEvents";
import { getEvents } from "../redux/eventList/selectors";
import * as actions from "../redux/eventList/actions";
import { getUserId } from "../redux/auth/selectors";

function mapStateToProps(state) {
  return {
    events: getEvents(state),
    userId: getUserId(state)
  };
}

const mapDispatchToProps = dispatch => ({
  requestEvents: () => {
    dispatch(actions.requestEvents())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MezEvents);
