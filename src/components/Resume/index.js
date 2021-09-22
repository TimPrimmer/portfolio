import React from 'react';
import '../../index.css';
import MyResume from '../../assets/docs/timprimmer_resume.pdf';


function Resume(props) {


  return (
    <div id="resume-section">
      <h2>My Resume</h2>
      <div id="resume-holder">
        <iframe id="resume-iframe" src={`${MyResume}`} title="My resume in pdf format" height="700px" width="100%" zoom="50%"/>
      </div>
    </div >
  );
}


export default Resume;