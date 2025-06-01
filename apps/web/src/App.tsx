import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChatPage from "./pages";
import { ChatProvider } from "./context/chatProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChatProvider>
    <React.StrictMode>
      <ChatPage />
    </React.StrictMode>
  </ChatProvider>,
);
