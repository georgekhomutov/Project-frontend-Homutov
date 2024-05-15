import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectItem from './ProjectItem';
import './styles/projectList.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('https://api.test.cyberia.studio/api/v1/projects');
      setProjects(response.data);
    };

    fetchProjects();
  }, []);

  return (
    <ul className="project-list-container">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;