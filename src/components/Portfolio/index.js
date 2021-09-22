import React from 'react';
import Project from '../Project';

function Portfolio(props) {

  return (
    <div id="portfolio-section">
      <h2>My Portfolio</h2>
      <div id="project-holder">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Portfolio;