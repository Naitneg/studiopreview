import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LoadingContextProvider from "./context/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoadingContextProvider>
  </React.StrictMode>
);
