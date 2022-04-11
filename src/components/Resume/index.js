import React from 'react';
import '../../index.css';
import MyResume from '../../assets/docs/TimPrimmer-Resume.pdf';
import MyCover from '../../assets/docs/TimPrimmer-CoverLetter.pdf';


function Resume(props) {


  return (
    <div id="resume-section">
      <div id="resume-qual">
        <h2>My Qualifications</h2>
        <section id="qual-info">
          <div className="qual-container">
            <h4>Front-End Skills</h4>
            <ul>
              <li>
                <p>Html</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
              <li>
                <p>jQuery</p>
              </li>
              <li>
                <p>Responsive Design</p>
              </li>
              <li>
                <p>React</p>
              </li>
              <li>
                <p>Bootstrap</p>
              </li>
            </ul>
          </div>
          <div className="qual-container">
            <h4>Back-End Skills</h4>
            <ul>
              <li>
                <p>APIs</p>
              </li>
              <li>
                <p>Node</p>
              </li>
              <li>
                <p>Express</p>
              </li>
              <li>
                <p>MySQL, Sequelize</p>
              </li>
              <li>
                <p>MongoDV, Mongoose</p>
              </li>
              <li>
                <p>REST</p>
              </li>
              <li>
                <p>GraphQL</p>
              </li>
            </ul>
          </div>
          <div className="qual-container" id="other-quals">
            <h4>Other Skills</h4>
            <ul>
              <li>
                <p>Adobe Premiere, Photoshop</p>
              </li>
              <li>
                <p>Unity, Unreal 4</p>
              </li>
              <li>
                <p>C++, C#, Python</p>
              </li>
              <li>
                <p>3ds Max</p>
              </li>
              {/* <li>
                <p>&#8205; </p>
              </li>
              <li>
                <p>&#8205; </p>
              </li>
              <li>
                <p>&#8205; </p>
              </li> */}
            </ul>
          </div>
        </section>

        <section id="resume-links">
          <div id="resume-link">
            <a href={MyResume} download><h2> Resume Link</h2></a>
          </div>
          <div id="cover-link">
            <a href={MyCover} download><h2> Cover Letter Link</h2></a>
          </div>
        </section>

      </div>
      <div id="resume-holder">
        <h2>My Resume</h2>
        <iframe id="resume-iframe" src={`${MyResume}#toolbar=0`} title="My resume in pdf format" height="650px" width="100%" />
      </div>
    </div >

  );
}


export default Resume;