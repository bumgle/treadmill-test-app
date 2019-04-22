import * as React from "react";
import { Provider } from "react-redux";

import Routes from "../config/Routes";
import store from "../config/reduxStore";
import fakeSocket from "../services/fakeSocket";

import "../services/fakeSocket";
import "./reset.scss";
import "./App.scss";

fakeSocket(store.dispatch, store.getState)();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
