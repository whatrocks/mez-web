import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { withRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import "./index.css";
import "bulma/css/bulma.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers";

const history = createBrowserHistory();

const AppWithRouter = withRouter(App);
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

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppWithRouter />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
