import React from 'react';

function Project(props) {

  let {
    title,
    link,
    github,
    image,
    description
  } = props.details;


  return (
    <div className="project-box" style={{ backgroundImage: 'url(' + image + ')' }}>
      <div className="proj-details">
        <div className="proj-info-box">
          <h3><a href={link} target="_blank" className="project-title-text">{title}</a></h3>
          <a href={github} target="_blank" className="project-icon-link">
            <img className="icon project-icon" src="./imgs/github.svg" title="Github Logo" alt="Link to Project GitHub" />
            </a>
        </div>
        <p className="project-text">{description}</p>
      </div>
    </div>
  );
}

export default Project;