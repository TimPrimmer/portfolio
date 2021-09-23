import React from 'react';
import Project from '../Project';


const projects = [
  {
    title: "Parktime 2.0",
    link: "https://parktime-2.herokuapp.com/",
    github: "https://github.com/TimPrimmer/parktime-app",
    image: "./imgs/parktime.png"
  },
  {
    title: "Social Network API",
    link: "https://github.com/TimPrimmer/social-network",
    github: "https://github.com/TimPrimmer/social-network",
    image: "./imgs/social.png"
  },
  {
    title: "Note Taker",
    link: "https://note-taker-timprimmer.herokuapp.com/",
    github: "https://github.com/TimPrimmer/note-taker",
    image: "./imgs/notetaker.png"
  },
  {
    title: "Readme Generator",
    link: "https://github.com/TimPrimmer/readme-generator",
    github: "https://github.com/TimPrimmer/readme-generator",
    image: "./imgs/readme.png"
  },
  {
    title: "Javascript Quiz",
    link: "https://timprimmer.github.io/web-quiz/",
    github: "https://github.com/TimPrimmer/web-quiz",
    image: "./imgs/webquiz.png"
  },
  {
    title: "Run Buddy",
    link: "https://timprimmer.github.io/run-buddy/",
    github: "https://github.com/TimPrimmer/run-buddy",
    image: "./imgs/runbuddy.png"
  }
]

function Portfolio(props) {

  return (
    <div id="portfolio-section">
      <h2>My Portfolio</h2>
      <div id="project-holder">
        {
          projects.map((proj, i) => (
            <Project details={proj} key={i}/>
          ))
        }
      </div>
    </div>
  );
}

export default Portfolio;