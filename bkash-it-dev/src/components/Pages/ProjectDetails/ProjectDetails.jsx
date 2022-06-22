import React from 'react';

const ProjectDetails = ({ project }) => {
  const { picture, name, description } = project;

  return (
    <div className='col-lg-4 col-md-6 col-10 pt-5 mx-auto'>
      <div className='card'>
        <img src={picture} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
