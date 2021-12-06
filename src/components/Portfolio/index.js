import React from 'react';
import Project from '../Project';

function Portfolio(props) {

  let imgArr = props.imgs;


  const projects = [
    {
      title: "Pet Plan-it",
      link: "https://enigmatic-temple-75821.herokuapp.com/",
      github: "https://github.com/dpbam/pet-social-network",
      image: imgArr[0],
      description: "Final group project for the UT coding course. Pet themed social network using React, GraphQL, MongoDB, and JQuery"
    },
    {
      title: "Parktime 2.0",
      link: "https://parktime-2.herokuapp.com/",
      github: "https://github.com/TimPrimmer/parktime-app",
      image: imgArr[1],
      description: "National park finder with social aspects using Handlebars, MySQL, and various APIs (National Park, Geoapify, OpenWeather)"
    },
    {
      title: "Budget Tracker",
      link: "https://boiling-springs-96272.herokuapp.com/",
      github: "https://github.com/TimPrimmer/budget-tracker",
      image: imgArr[2],
      description: "Budget tracker PWA that allows for both online and offline usage using noSQL, Mongoose, Heroku, and Express"
    },
    {
      title: "Horde Sandbox",
      link: "https://mordhau.mod.io/hordesandbox",
      github: "",
      image: imgArr[3],
      description: "Custom level created for the video game 'Mordhau'. Made using Unreal 4, 3ds Max, Photoshop"
    },
    {
      title: "Javascript Quiz",
      link: "https://timprimmer.github.io/web-quiz/",
      github: "https://github.com/TimPrimmer/web-quiz",
      image: imgArr[4],
      description: "A web quiz based on Javascript. Includes a scoring system and tracks submitted highscores using Javascript, HTML, CSS"
    },
    {
      title: "Book Search",
      link: "https://timprimmer.github.io/run-buddy/",
      github: "https://github.com/TimPrimmer/run-buddy",
      image: imgArr[5],
      description: "A book finding website where users can create accounts and save books. Created using React, GraphQL, MongoDB"
    }
  ]



  return (
    <div id="portfolio-section">
      <div id="project-holder">
        {
          projects.map((proj, i) => (
            <Project details={proj} key={i} />
          ))
        }
      </div>
    </div>
  );
}

export default Portfolio;