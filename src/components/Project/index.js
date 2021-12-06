import React from 'react';

import githubLogo from '../../assets/imgs/github.svg';

function Project(props) {

  let {
    title,
    link,
    github,
    image,
    description
  } = props.details;

  let anyGithub = false;
  if (github != "") {
    anyGithub = true;
  }


  return (
    <div className="project-box" >
      <div className="proj-details" >
        <div className="project-image-box" style={{ backgroundImage: 'url(' + image + ')' }}><a href={link} target="_blank"/></div>
        <div className="project-title-box">
          <h3>
            <a href={link} target="_blank" className="project-title-text">{title}</a>
          </h3>
          {anyGithub ? 
            <a href={github} target="_blank" className="project-icon-link">
              <img className="icon project-icon" src={githubLogo} title="Github Logo" alt="Link to Project GitHub" />
            </a>
          : null }
        </div>
        <div className="proj-info-box">
          <p className="project-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;