import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import LandingPage from "./LandingPage";
import RequireAuth from "../RequireAuth";
import UserPage from "./UserPage";
import SettingsPage from "./SettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <UserPage />
          </RequireAuth>
        }
      />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;
