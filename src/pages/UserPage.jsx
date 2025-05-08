import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "react-bootstrap";
import NavBar from "./components/NavBar";
import CreateLesson from "./components/CreateLesson";

import "./styles/UserPage.css"; // css

function UserPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false); // Modal state

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
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      {/* Bootstrap: */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />

      {/* Header */}
      <NavBar />
      {/* Welcome Section */}
      <section className="text-center min-h-screen py-20 w-full userpage-section">
        <div className="dashboard">
          <h2 className="dashboard-title">Welcome, {name} 👋</h2>
          <p className="dashboard-subtitle">What would you like to do today?</p>

          <div className="button-group">
            <button
              className="primary-button"
              onClick={() => setShowModal(true)}
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

          {/* Bootstrap Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Create New Lesson</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CreateLesson closeModal={() => setShowModal(false)} />{" "}
              {/* Render your CreateLesson form here */}
            </Modal.Body>
          </Modal>

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
