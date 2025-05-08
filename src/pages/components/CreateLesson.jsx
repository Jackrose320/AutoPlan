import { useState, useEffect } from "react";
import "../styles/CreateLesson.css";

import "bootstrap/dist/css/bootstrap.min.css";

function CreateLesson({
  closeModal,
  onCreateLesson = null,
  lesson = null,
  isEditing = false,
}) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Draft");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Beginner");

  // If lesson already exists, update the title and status:
  useEffect(() => {
    if (lesson) {
      setTitle(lesson.title);
      setStatus(lesson.status);
    }
  }, [lesson]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLesson = {
      id: lesson ? lesson.id : Date.now(), // Or a UUID
      title,
      subject,
      description,
      level,
      status: "Draft",
      createdAt: lesson
        ? lesson.createdAt
        : new Date().toISOString().split("T")[0], // format as YYYY-MM-DD
    };

    onCreateLesson(newLesson); // 👈 Send data up
    alert("Lesson set successfully!");
    closeModal();
  };

  return (
    <div className="container create-lesson-container">
      <div className="card shadow-lg p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Lesson Title:
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
              Subject:
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
              Difficulty Level:
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
              Lesson Description:
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
              onClick={closeModal}
            >
              ← Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {lesson ? "Save Changes" : "Create Lesson"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateLesson;
