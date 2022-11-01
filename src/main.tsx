import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("layout") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
