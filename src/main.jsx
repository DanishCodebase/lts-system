import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UrlContext from "./context/UrlContext.jsx";
import PositionContext from "./context/PositionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UrlContext>
        <PositionContext>
          <App />
        </PositionContext>
      </UrlContext>
    </BrowserRouter>
  </StrictMode>
);
