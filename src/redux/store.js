import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { createFilter } from "redux-persist-transform-filter";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import createBrowserHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import reducer from "../reducers";
import rootSaga from "./saga"

const persistedFilter = createFilter(
  'auth', ['access', 'refresh']);

const persistedReducer = persistReducer(
  {
    key: "mez",
    storage: storage,
    whitelist: ['auth'],
    transforms: [persistedFilter]
  },
  reducer
)

export const history = createBrowserHistory();
const router = routerMiddleware(history);

let composer = process.env.NODE_ENV === "production" ? compose : composeWithDevTools;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composer(
    applyMiddleware(
      sagaMiddleware,
      thunk, 
      router
    )
  )
);
sagaMiddleware.run(rootSaga);
persistStore(store)