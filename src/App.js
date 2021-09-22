import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

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

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <div class="spacer"></div>
      <section id="main-section">
        {(() => {
          switch (currentCategory.name) {
            case "about me": return <About />;
            case "portfolio": return <Portfolio />;
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
