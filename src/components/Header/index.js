import React, { useEffect } from 'react';


function Header(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    let tempString = currentCategory.name[0].toUpperCase();
    tempString += currentCategory.name.substring(1);
    document.title = tempString;
  }, [currentCategory]);

  return (
    <header>
      <h1><a href="./">Tims Portfolio</a></h1>
      <nav>
        <ul id="main-nav">
          <li>
            <h2><a href="#about-section" onClick={() => setCurrentCategory(categories[0])}>About Me</a></h2>
          </li>
          <li>
            <h2><a href="#portfolio-section" onClick={() => setCurrentCategory(categories[1])}>Portfolio</a></h2>
          </li>
          <li>
            <h2><a href="#contact-section" onClick={() => setCurrentCategory(categories[2])}>Contact</a></h2>
          </li>
          <li>
            <h2><a href="#resume-section" onClick={() => setCurrentCategory(categories[3])}>Resume</a></h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;