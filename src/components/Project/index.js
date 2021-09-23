import React from 'react';

function Project(props) {

  let {
    title,
    link,
    github,
    image
  } = props.details;


  return (
    <div className="project-box" style={{ backgroundImage: 'url(' + image + ')' }}>
      <div className="proj-details">
        <h3>{title}</h3>
        <div className="link-details">
          <a href={link} target="_blank">Visit</a>
          <a href={github} target="_blank">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Project;