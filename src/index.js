import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { withRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers";

const AppWithRouter = withRouter(App);

const history = createHistory();
const router = routerMiddleware(history);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, router),
    process.env.NODE_ENV !== "production" && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
