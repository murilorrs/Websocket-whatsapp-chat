import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChatPage from "./pages/chat";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChatPage />
  </React.StrictMode>,
);
