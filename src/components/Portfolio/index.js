import React from 'react';
import Project from '../Project';


const projects = [
  {
    title: "Parktime 2.0",
    link: "https://parktime-2.herokuapp.com/",
    github: "https://github.com/TimPrimmer/parktime-app",
    image: "./imgs/parktime.png",
    description: "Node, Express, mySQL, Handlebars"
  },
  {
    title: "Pet Plan-it",
    link: "https://enigmatic-temple-75821.herokuapp.com/",
    github: "https://github.com/dpbam/pet-social-network",
    image: "./imgs/petplanit.png",
    description: "Node, Express, GraphQL, React, Apollo, ImgurAPI"
  },
  {
    title: "Budget Tracker",
    link: "https://boiling-springs-96272.herokuapp.com/",
    github: "https://github.com/TimPrimmer/budget-tracker",
    image: "./imgs/budget.png",
    description: "PWA, noSQL, Mongoose, Express"
  },
  {
    title: "Note Taker",
    link: "https://note-taker-timprimmer.herokuapp.com/",
    github: "https://github.com/TimPrimmer/note-taker",
    image: "./imgs/notetaker.png",
    description: "Express, Node"
  },
  {
    title: "Javascript Quiz",
    link: "https://timprimmer.github.io/web-quiz/",
    github: "https://github.com/TimPrimmer/web-quiz",
    image: "./imgs/webquiz.png",
    description: "Javascript, HTML, CSS"
  },
  {
    title: "Run Buddy",
    link: "https://timprimmer.github.io/run-buddy/",
    github: "https://github.com/TimPrimmer/run-buddy",
    image: "./imgs/runbuddy.png",
    description: "HTML, CSS"
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