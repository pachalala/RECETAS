import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecepContext, RecepContextProvider } from "./context/RecepContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecepContextProvider>
      <App />
    </RecepContextProvider>
  </React.StrictMode>
);
