import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/CreateLessonPage.css";
import NavBar from "./components/NavBar";

function CreateLessonPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Beginner");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save lesson would go here
    alert("Lesson created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="container create-lesson-container mt-5">
      <NavBar />
      <div className="card shadow-lg p-4">
        <h2 className="mb-4">Create New Lesson</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Lesson Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g. Introduction to Fractions"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="e.g. Math"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="level" className="form-label">
              Difficulty Level
            </label>
            <select
              className="form-select"
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Lesson Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe what the lesson will cover."
            ></textarea>
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate("/dashboard")}
            >
              ← Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateLessonPage;
