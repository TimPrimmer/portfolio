import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <section id="main-section">
        <Portfolio />
      </section>
      <Footer />
    </div>
  );
}

export default App;
