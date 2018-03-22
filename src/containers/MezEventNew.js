import { connect } from "react-redux";
import MezEventNew from "../components/MezEventNew";
import * as actions from "../redux/eventList/actions";
import { getUserId } from "../redux/auth/selectors";

function mapStateToProps(state) {
  return {
    userId: getUserId(state)
  };
}

const mapDispatchToProps = dispatch => ({
  onSubmitEvent: (details) => {
    dispatch(actions.postEvent(details))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MezEventNew);
