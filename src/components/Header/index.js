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

  let aboutMeClicked;
  let portfolioClicked;
  let contactClicked;
  let resumeClicked;

  const highlightTab = (clickedTab) => {
    console.log(aboutMeClicked);
    switch (clickedTab.name) {
      case "about me": {
        aboutMeClicked = true;
        break;
      }
      case "portfolio": {
        portfolioClicked = true;
        break;
      }
      case "contact": {
        contactClicked = true;
        break;
      }
      case "resume": {
        resumeClicked = true;
        break;
      }
      default: {
        aboutMeClicked = true;
        break;
      }
    }
    console.log(clickedTab);
  }

  highlightTab(currentCategory);

  return (
    <header>
      <h1><a href="./">Tims Portfolio</a></h1>
      <nav>
        <ul id="main-nav">
          <li>
            <h2>
              <a href="#about-section" id="about-link" className={`${aboutMeClicked ? 'active-tab' : 'non-active-tab'}`} onClick={() => {
                setCurrentCategory(categories[0])
              }}>About Me
              </a>
            </h2>
          </li>
          <li>
            <h2><a href="#portfolio-section" id="portfolio-link" className={`${portfolioClicked ? 'active-tab' : 'non-active-tab'}`} onClick={() => {
              setCurrentCategory(categories[1])
            }}>Portfolio</a></h2>
          </li>
          <li>
            <h2><a href="#contact-section" id="contact-link" className={`${contactClicked ? 'active-tab' : 'non-active-tab'}`} onClick={() => {
              setCurrentCategory(categories[2])
            }}>Contact</a></h2>
          </li>
          <li>
            <h2><a href="#resume-section" id="resume-link" className={`${resumeClicked ? 'active-tab' : 'non-active-tab'}`} onClick={() => {
              setCurrentCategory(categories[3])
            }}>Resume</a></h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;