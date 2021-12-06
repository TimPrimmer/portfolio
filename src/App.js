import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';


import parktime from "./assets/imgs/parktime.png";
import petplanit from "./assets/imgs/petplanit.png";
import budget from "./assets/imgs/budget.png";
import webquiz from "./assets/imgs/webquiz.png";
import mordhau from "./assets/imgs/mordhau.png";
import book from "./assets/imgs/book.png";


import bg1 from "./assets/imgs/background1.jpg";
import bg2 from "./assets/imgs/background2.jpg";
import bg3 from "./assets/imgs/background3.jpg";
import bg4 from "./assets/imgs/background4.jpg";

function App() {


  const imgArr = [petplanit, parktime, budget, mordhau, webquiz, book];
  const bgImgArr = [bg1, bg2, bg3, bg4];
  const [categories] = useState([
    {
      name: 'about me',
      description: 'Description about who I am and what I do',
    },
    { name: 'portfolio', description: 'Showcase of my work' },
    { name: 'contact', description: 'How to contact me' },
    { name: 'resume', description: 'Work experience and skillsets' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    let tempString = "Tim Primmer - ";

    tempString += currentCategory.name[0].toUpperCase();
    tempString += currentCategory.name.substring(1);
    document.title = tempString;
    $('body').css('background-image', 'url(' + bg2 + ')');
    // switch (currentCategory.name) {
    //   case "about me": {
    //     $('body').css('background-image', 'url(' + bg1 + ')');
    //     break;
    //   }
    //   case "portfolio": {
    //     $('body').css('background-image', 'url(' + bg2 + ')');
    //     break;
    //   }
    //   case "contact": {
    //     $('body').css('background-image', 'url(' + bg3 + ')');
    //     break;
    //   }
    //   case "resume": {
    //     $('body').css('background-image', 'url(' + bg4 + ')');
    //     break;
    //   }
    // }
  }, [currentCategory]);

  return (
    <div id="react-root">
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <div id="spacer"></div>
      <section id="main-section">
        {(() => {
          switch (currentCategory.name) {
            case "about me": return <About />;
            case "portfolio": return <Portfolio imgs={imgArr} />;
            case "contact": return <Contact />;
            case "resume": return <Resume />;
            default: return <About />;
          }
        })()}
      </section>
      <Footer />
    </div>
  );
}

export default App;
