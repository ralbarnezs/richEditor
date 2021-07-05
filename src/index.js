import React from "react";
import ReactDOM from "react-dom";
import CssBaseLine from "@material-ui/core/CssBaseline";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CssBaseLine>
    <App />
  </CssBaseLine>,
  rootElement
);
