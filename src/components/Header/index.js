import React from 'react';


function Nav(props) {

  return (
    <header>
      <h1>Tims Portfolio</h1>
      <nav>
        <ul id="main-nav">
          <li>
            <h2><a href="./">About Me</a></h2>
          </li>
          <li>
            <h2><a href="./">Portfolio</a></h2>
          </li>
          <li>
            <h2><a href="./">Contact</a></h2>
          </li>
          <li>
            <h2><a href="./">Resume</a></h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;