import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import LanguageDetector from "i18next-browser-languagedetector";
import store from "./context/auth/authStore.js";

// import React from "react";
// import ReactDOM from "react-dom";
import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { useTranslation, initReactI18next } from "react-i18next";
import { SocketContext, socket } from "./context/socket.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({

    // 'es', 'fin', 'bs', 'sp', 'de'
    supportedLngs : ['en', 'fr'],

    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* To make Tailwind styles appear before the Material UI styles */}
    <StyledEngineProvider injectFirst>
      <SocketContext.Provider value={socket}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </SocketContext.Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
