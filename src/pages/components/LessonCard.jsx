// src/components/LessonCard.js
import React from "react";
import PropTypes from "prop-types";

function LessonCard({ lesson, onEdit, onDelete }) {
  return (
    <div className={`lesson-card ${lesson.status.toLowerCase()}`}>
      <h4>{lesson.title}</h4>
      <p className="lesson-meta">
        Status: <span className="badge">{lesson.status}</span> | Created:{" "}
        {lesson.createdAt}
      </p>
      <div className="lesson-actions">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onEdit(lesson)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDelete(lesson.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

LessonCard.propTypes = {
  lesson: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default LessonCard;
