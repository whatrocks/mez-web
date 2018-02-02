import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from "../components/App";
import * as AppActions from "../actions/app";

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);