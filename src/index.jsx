import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactHelmet from "Components/ReactHelmet";
import App from "Components/App";
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactHelmet />
    <GlobalStyle />
  </React.StrictMode>
,document.getElementById("root"));