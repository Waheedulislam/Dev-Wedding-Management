/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Router.jsx";
import { AuthProvider } from "./Providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// Crisp chat function
const CrispIntegration = () => {
  useEffect(() => {
    if (!window.$crisp) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "22b93c97-b276-4de3-a864-b0903b96f452";

      (function () {
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        d.head.appendChild(s);
      })();
    }
  }, []);

  return null;
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <CrispIntegration /> {/* Crisp integration */}
    </AuthProvider>
  </React.StrictMode>
);
