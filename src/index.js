import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import store from "./store";
import App from "./App";
import "./style.css";

render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
