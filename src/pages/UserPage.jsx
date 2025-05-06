import "./App.css";
import "./UserPage.css";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Dropdown } from "react-bootstrap";

function UserPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  {
    /* Username/Name switching: */
  }
  useEffect(() => {
    if (isLoaded && user) {
      const fallbackName =
        user.fullName ||
        `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
        user.username ||
        "User";

      setName(fallbackName);
    }
  }, [isLoaded, user]);

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    console.log("Saving name:", name);
    setIsEditing(false);
  };

  {
    /* Navigation: */
  }
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);

  {
    /* Loading: */
  }
  if (!isLoaded) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="text-gray-800 w-full">
      {/* Bootstrap: */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />

      {/* Header */}
      <header className="custom-header">
        <div className="logo-container">
          <a href="/">
            <img src="/autoplan-icon.png" width="40" alt="AutoPlan Logo" />
          </a>
        </div>
        <h1 className="title">AutoPlan</h1>
        <div className="menu">
          <button
            className="menubutton shadow"
            onClick={() => navigate("/settings?section=HelpCenter")}
          >
            Help & Support
          </button>
          <button className="menubutton shadow">Notifications</button>
          <SignOutButton>
            <button className="menubutton shadow">Sign Out</button>
          </SignOutButton>
          <button
            className="menubutton shadow"
            onClick={() => navigate("/settings")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="settings"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="text-center min-h-screen py-20 w-full userpage-section">
        <div className="dashboard">
          <h2 className="dashboard-title">Welcome, {name} 👋</h2>
          <p className="dashboard-subtitle">What would you like to do today?</p>

          <div className="button-group">
            <button
              className="primary-button"
              onClick={() => navigate("/create")}
            >
              ➕ Create New Lesson
            </button>
            <button
              className="primary-button"
              onClick={() => navigate("/my-lessons")}
            >
              📚 View My Lessons
            </button>
          </div>

          <div className="alert alert-info text-start" role="alert">
            <h4 className="alert-heading">Your Profile</h4>
            <hr />
            <p>
              <strong>Name:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  className="form-control d-inline-block w-auto"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                name || "N/A"
              )}{" "}
              <button
                className={`btn btn-sm ${
                  isEditing ? "btn-success" : "btn-primary"
                } ms-2 shadow`}
                onClick={() => {
                  if (isEditing) handleSave();
                  else setIsEditing(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pen-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                </svg>
              </button>
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.emailAddresses[0].emailAddress}
            </p>
            <div className="alert alert-danger mt-2" role="alert">
              <p>
                <strong>User ID:</strong> {user.id}
              </p>
              <em>
                <small>Do not share this!</small>
              </em>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserPage;
