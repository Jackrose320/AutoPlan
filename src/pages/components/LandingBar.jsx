import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Bar.css";
import { useUser } from "@clerk/clerk-react";

import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // Can navigate to the dashboard upon signing in:
  useEffect(() => {
    if (isLoaded && user && location.state?.fromSignIn) {
      navigate("/dashboard");
    }
  }, [isLoaded, user, navigate, location.state]);

  return (
    <header className="custom-header">
      <div className="logo-container">
        <img src="/autoplan-icon.png" width="40"></img>
      </div>
      <h1 className="navtitle">AutoPlan</h1>
      <div className="nav-container">
        <a href="#about" className="nav-links">
          About
        </a>
        <a href="#features" className="nav-links">
          Features
        </a>
        <a href="#meetus" className="nav-links">
          Meet Us
        </a>
        <a
          href={isLoaded && user ? "/dashboard" : "#try"}
          className="nav-links nav-links-last"
        >
          {isLoaded && user ? "Dashboard" : "Try Free"}
        </a>
      </div>
    </header>
  );
}

export default NavBar;
