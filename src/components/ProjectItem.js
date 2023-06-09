import React from "react";
import "../styles/Projects.css";


const ProjectItem = ({ image, name, url }) => {
  return (
    <div
      className="details-container color-container"
      onClick={() => {
        window.location.href = url;
      }}
    >
      <div className="article-container">
        <img src={image} alt={name} className="project-img" />
      </div>
      <h2 className="project-sub-title project-title">{name}</h2>
      <div className="btn-container">
        <button className="btn btn-color-2 project-btn">Github</button>
      </div>
    </div>
  );
}

export default ProjectItem;
