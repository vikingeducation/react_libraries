import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/scss/bootstrap.scss";
import "grommet/scss/vanilla/index.scss";
import "./index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { swpedia } from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(swpedia, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
