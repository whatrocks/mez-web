import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { withRouter, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { createFilter } from "redux-persist-transform-filter";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import App from "./containers/App";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./redux/reducer";
import rootSaga from "./redux/saga"

const history = createBrowserHistory();

const persistedFilter = createFilter(
  'auth', ['access', 'refresh']);

export const persistConfig =   {
  key: "mez",
  storage: storage,
  whitelist: ['auth'],
  transforms: [persistedFilter]
};

const persistedReducer = persistReducer(
  persistConfig,
  reducer
)

const AppWithRouter = withRouter(App);
const router = routerMiddleware(history);

let composer = process.env.NODE_ENV === "production" ? compose : composeWithDevTools;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composer(
    applyMiddleware(
      sagaMiddleware,
      router
    )
  )
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/" component={AppWithRouter}/>
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();