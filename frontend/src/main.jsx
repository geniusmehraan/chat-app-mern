import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthcontextProvider } from "./context/AuthContext.jsx";
import { SocketcontextProvider } from "./context/Socketcontext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthcontextProvider>
        <SocketcontextProvider>
          <App />
        </SocketcontextProvider>
      </AuthcontextProvider>
    </BrowserRouter>
  </StrictMode>
);
