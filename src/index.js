import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer" + localStorage.getItem("token");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
