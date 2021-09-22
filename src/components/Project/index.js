import React from 'react';

function Project(props) {

  let title = "Example Title";

  return (
    <div className="project-box" id="project-one">
      <div className="proj-details">
        <h3>{title}</h3>
        <div className="link-details">
          <a href="./">Link</a>
          <a href="./">Link2</a>
        </div>
      </div>
    </div>
  );
}

export default Project;