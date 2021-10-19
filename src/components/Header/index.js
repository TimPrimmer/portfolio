import React, { useEffect } from 'react';


function Header(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    let tempString = "Tim Primmer - ";
    tempString += currentCategory.name[0].toUpperCase();
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

  const toggleDropdown = () => {
    document.getElementById("main-nav").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  return (
    <header>
      <h1><a href="./">TPrimmer</a></h1>
      <nav id="dropdown">
        <div className="dropbtn" onClick={toggleDropdown}>

          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
        </div>
        <ul id="main-nav" className="dropdown-content">
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