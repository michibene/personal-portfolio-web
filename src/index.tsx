import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MainPage />
    </React.StrictMode>
);
