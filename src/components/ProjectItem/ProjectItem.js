import React from 'react';
import './styles/projectItem.css';

const ProjectItem = ({ project }) => {
  return (
    <li className="project-item-container">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.description}</p>
      </div>
    </li>
  );
};

export default ProjectItem;