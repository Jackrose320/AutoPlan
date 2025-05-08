import "./styles/MyLessonsPage.css";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "react-bootstrap";
import CreateLesson from "./components/CreateLesson";
import LessonCard from "./components/LessonCard";

import "bootstrap/dist/css/bootstrap.min.css";

function MyLessonsPage() {
  const navigate = useNavigate();
  const { user, isLoaded, isSignedIn } = useUser();
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
  const handleLessonSubmit = (lessonData) => {
    if (editingLesson) {
      // Replace the existing lesson
      setLessons((prevLessons) =>
        prevLessons.map((l) => (l.id === lessonData.id ? lessonData : l))
      );
    } else {
      // Create a new lesson
      setLessons((prevLessons) => [...prevLessons, lessonData]);
    }

    setEditingLesson(null);
    setShowModal(false);
  };

  // Lessons logic:
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "Photosynthesis for Grade 6",
      status: "Published",
      createdAt: "2024-11-05",
    },
    // ... other sample lessons
  ]);

  const handleCreateLesson = (newLesson) => {
    setLessons((prevLessons) => [...prevLessons, newLesson]);
  };

  // Handle opening and closing the modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => {};
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);

  const handleBack = () => {
    navigate("/dashboard");
  };

  const filteredLessons =
    filter === "All"
      ? lessons
      : lessons.filter((lesson) => lesson.status === filter);

  return (
    <div className="my-lessons-container">
      <NavBar />
      <div className="my-lessons-header">
        <h2>📚 My Lessons</h2>
        <div className="lesson-controls">
          <select
            className="form-select"
            value={filter}
            title="selection"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Archived">Archived</option>
          </select>
          <button
            className="btn btn-primary"
            onClick={handleShow}
            type="button"
          >
            + New Lesson
          </button>
        </div>
        {/* Bootstrap Modal */}
        <Modal
          show={showModal}
          onHide={() => {
            setShowModal(false);
            setEditingLesson(null); // reset};
          }}
          centered
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {editingLesson ? "Edit Lesson" : "Create New Lesson"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateLesson
              closeModal={() => {
                setShowModal(false);
                setEditingLesson(null); // reset};
              }}
              onCreateLesson={handleLessonSubmit}
              lesson={editingLesson}
              isEditing={!!editingLesson}
            />
            {/* Render your CreateLesson form here */}
          </Modal.Body>
        </Modal>
      </div>

      <div className="lessons-list">
        {filteredLessons.length === 0 ? (
          <p className="no-lessons">No lessons found.</p>
        ) : (
          filteredLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onEdit={(lesson) => {
                setEditingLesson(lesson);
                setShowModal(true);
              }}
              onDelete={(id) =>
                setLessons((prev) => prev.filter((l) => l.id !== id))
              }
            />
          ))
        )}
      </div>

      <button
        className="btn btn-outline-secondary mt-4"
        onClick={handleBack}
        type="button"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}

export default MyLessonsPage;
