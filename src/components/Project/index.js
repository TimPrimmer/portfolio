import React from 'react';

function Project(props) {

  let title = "Example Title";

  return (
    <div class="project-box" id="project-one">
      <div class="proj-details">
        <h3>{title}</h3>
        <div class="link-details">
          <a href="./">Link</a>
          <a href="./">Link2</a>
        </div>
      </div>
    </div>
  );
}

export default Project;