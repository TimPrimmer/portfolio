import React from 'react';


function Footer(props) {

  return (
    <footer>
      <section id="footer-info">
        {/* <a href="https://timprimmer.github.io/portfolio-website/" target="_blank">
          <img class="icon" src="./imgs/globe.svg" title="Tim's portfolio" alt="Link to Tim's portfolio" />
        </a> */}
        <a href="https://github.com/TimPrimmer" target="_blank">
          <img class="icon" src="./imgs/github.svg" title="Tim's GitHub" alt="Link to Tim's GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/timprimmer/" target="_blank">
          <img class="icon" src="./imgs/linkedin.svg" title="Tim's LinkedIn" alt="Link to Tim's LinkedIn" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;