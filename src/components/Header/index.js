import React, { useEffect } from 'react';
import bg1 from "../../assets/imgs/background1.jpg";
import bg2 from "../../assets/imgs/background2.jpg";
import bg3 from "../../assets/imgs/background3.jpg";
import bg4 from "../../assets/imgs/background4.jpg";
import $ from 'jquery';

function Header(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;



  let aboutMeClicked;
  let portfolioClicked;
  let contactClicked;
  let resumeClicked;

  const highlightTab = (clickedTab) => {
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
  }

  highlightTab(currentCategory);

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("react-root").style.marginLeft = "250px";
    document.getElementById("dim-controller").classList.add("dim");
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("react-root").style.marginLeft = "0";
    document.getElementById("dim-controller").classList.remove("dim");
    document.body.style.backgroundColor = "white";
  }

  return (
    <header id="header-ref">

      <nav id="dropdown">
        <div className="dropbtn" onClick={openNav}>

          <svg viewBox="0 0 100 80" width="54" height="54">
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
        </div>

        <ul className="sidenav" id="mySidenav">
          <a className="closebtn" onClick={closeNav}>&times;</a>
          <li>
            <h2>
              <a href="#" id="about-link" className={`${aboutMeClicked ? 'active-tab' : 'non-active-tab'}`} onClick={() => {
                setCurrentCategory(categories[0]);
                closeNav();
              }}>About
              </a>
            </h2>
          </li>
          <li>
            <h2><a href="#" id="portfolio-link" className={`${portfolioClicked ? 'active-tab' : 'non-active-tab'}`} onClick={() => {
              setCurrentCategory(categories[1]);
              closeNav();
            }}>Portfolio</a></h2>
          </li>
          <li>
            <h2><a href="#" id="contact-link" className={`${contactClicked ? 'active-tab' : 'non-active-tab'}`} onClick={() => {
              setCurrentCategory(categories[2]);
              closeNav();
            }}>Contact</a></h2>
          </li>
          <li>
            <h2><a href="#" id="resumeheader-link" className={`${resumeClicked ? 'active-tab' : 'non-active-tab'}`} onClick={() => {
              setCurrentCategory(categories[3]);
              closeNav();
            }}>Resume</a></h2>
          </li>
        </ul>
      </nav>

      <div id="dim-controller" className="seethrough"></div>

      <h1 id="header-name">
        <a href="./">TPrimmer</a>
      </h1>
    </header>
  );
}

export default Header;