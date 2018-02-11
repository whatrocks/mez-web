import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { withRouter, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { createFilter } from "redux-persist-transform-filter";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

import "./index.css";
import "bulma/css/bulma.css";
import App from "./containers/App";
import PrivateRoute from "./containers/PrivateRoute";
import Login from "./containers/Login";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers";

const history = createBrowserHistory();

const persistedFilter = createFilter(
  'auth', ['access', 'refresh']);

const persistedReducer = persistReducer(
  {
    key: "polls",
    storage: storage,
    whitelist: ['auth'],
    transforms: [persistedFilter]
  },
  reducer
)

const AppWithRouter = withRouter(App);
const router = routerMiddleware(history);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk, 
      router
    ),
    process.env.NODE_ENV !== "production" && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);

persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={AppWithRouter}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
