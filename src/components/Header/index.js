import React from 'react';



function Nav(props) {

  return (
    <header>
      <h1>Tims Portfolio</h1>
      <nav>
        <ul id="main-nav">
          <li>
            <h2>About Me</h2>
          </li>
          <li>
            <h2>Portfolio</h2>
          </li>
          <li>
            <h2>Contact</h2>
          </li>
          <li>
            <h2>Resume</h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;