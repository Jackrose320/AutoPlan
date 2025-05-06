import React, { StrictMode } from "react"; // Add this import
import { createRoot } from "react-dom/client";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App.jsx";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Publishable Key: ", publishableKey);

createRoot(document.getElementById("root")).render(
  <ClerkProvider
    publishableKey={publishableKey}
    signInForceRedirectUrl={
      import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL
    }
    signUpForceRedirectUrl={
      import.meta.env.VITE_CLERK_SIGN_UP_FORCE_REDIRECT_URL
    }
    signInFallbackRedirectUrl={"http://localhost:5174/dashboard"}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
