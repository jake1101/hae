import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactHelmet from "Components/ReactHelmet";
import App from "Components/App";
import GlobalStyle from "./styles/GlobalStyle";

// import "./styles/common.css";
// import "./styles/datepicker.css";

ReactDOM.render(
  <React.StrictMode>
    <ReactHelmet />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
,document.getElementById("root"));