import React from 'react';


function About(props) {

  return (
    <div id="about-section">
      <h2>About Me</h2>
      <img id="about-picture" src="./imgs/timprimmer2.png" title="The man himself Tim!" alt="A picture of Tim Primmers face" />
      <section>
        <p id="about-text">
          My name is Tim Primmer and this is my portfolio website! I'm a 25 year old geek living in Austin, currently enrolled in the UT Full-Stack Coding Bootcamp. <br /><br/>
          The course offers knowledge on HTML, CSS, Javascript, React, and much more! In addition I've also completed an ACC C++ Certification and have some experience with both the Unreal 4 and Unity game engines.<br/><br/>
          Have a look around at the site, my resume, and some of my projects. Let me know what you think and don't hesitate to reach out for any business inquiries!<br/>
        </p>
      </section>
    </div>
  );
}

export default About;

