import { connect } from "react-redux";
import App from "../components/App";
import * as auth from "../redux/auth/actions";

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = (dispatch) =>  ( {
  handleLogout: () => {
    dispatch(auth.logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
