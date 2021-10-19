import React from 'react';
import me from '../../assets/me.png';

function About(props) {

  return (
    <div id="about-section">
      <div id="about-picture-frame">
        <img id="about-picture" src={me} alt="Tim Primmer" />
        {/* <img id="about-picture" src='./imgs/me.png' alt="Tim Primmer" /> */}
      </div>

      <section>
        <p id="about-text">
          My name is <span className="bold-text">Tim Primmer</span>, I'm a 25 year old geek living in Austin and a recent graduate from the <span className="bold-text">UT Full-Stack</span> coding bootcamp.
          <br /><br />
          I’m <span className="bold-text">looking for a job</span> to harness my new <span className="bold-text">front-end</span> and <span className="bold-text">back-end</span> knowledge!
          <br /><br />
          I’ve always been <span className="bold-text">passionate</span> about anything computer related, and have a lot of <span className="bold-text">other skills</span> in the field.
          <br /><br />
          Check out my <span className="bold-text">resume</span> and some of my <span className="bold-text">projects</span>, let me know what you think and don’t hesitate to <span className="bold-text">contact me!</span>
        </p>
      </section>
    </div>
  );
}

export default About;

