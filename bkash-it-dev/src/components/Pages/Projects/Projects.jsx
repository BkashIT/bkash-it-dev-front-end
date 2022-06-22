import React, { useEffect, useState } from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './projects.css';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch(`http://bkashit.com:5000/projects`)
      .then((res) => res.json())
      .then((data) => setProjectsData(data.projects));
  }, [projectsData._id]);
  return (
    <div className='container'>
      <div className='row'>
        <div className='project-content'>
          <h1>Our Demo Project</h1>
        </div>
        {projectsData.map((project, _id) => (
          <ProjectDetails project={project} key={_id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
