import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./LessonCard.css";

const LessonCard = (props) => {
  return (
    <div className="lesson-card">
      <Link className="card" to={`/lessons/${props._id}`}>
        <div>
          <div id="lesson-card">
            <img id="paper" src="/assets/blank-doc.png" alt="icon of a a paper file" />
            <div id="lesson-details">
              <p className="lesson-attr">Title: {props.name}</p>
              <p className="lesson-attr">Subject: {props.subject}</p>
              <p className="lesson-attr">Grade Level: {props.gradeLevel}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="button-container">
        <NavLink className="edit-link" to={`/lessons/${props._id}/edit`}><button id="card-edit-button">Edit</button></NavLink>
        <NavLink className="delete-link" to={`/lessons/${props._id}/delete`}><button id="card-delete-button">Delete</button></NavLink>
      </div>
    </div>
  );
};

export default LessonCard;