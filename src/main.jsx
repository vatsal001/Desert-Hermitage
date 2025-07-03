import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import WhatsAppChatButton from "./Shared/whatsapp.jsx";

const helmetContext = {};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
      <WhatsAppChatButton />
    </HelmetProvider>
  </React.StrictMode>
);
