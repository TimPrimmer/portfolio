import React from 'react';
import github from '../../assets/imgs/github.svg';
import linkedin from '../../assets/imgs/linkedin.svg';

function Footer(props) {

  return (
    <footer>
      <section id="footer-info">
        {/* <a href="https://timprimmer.github.io/portfolio-website/" target="_blank">
          <img class="icon" src="./imgs/globe.svg" title="Tim's portfolio" alt="Link to Tim's portfolio" />
        </a> */}
        <a href="https://github.com/TimPrimmer" target="_blank">
          {/* <img className="icon" src="./imgs/github.svg" title="Tim's GitHub" alt="Link to Tim's GitHub" /> */}
          <img className="icon" src={github} title="Tim's GitHub" alt="Link to Tim's GitHub" />
        </a>
        <a id="email">timprimmer@gmail.com</a>
        <a href="https://www.linkedin.com/in/timprimmer/" target="_blank">
          <img className="icon" src={linkedin} title="Tim's LinkedIn" alt="Link to Tim's LinkedIn" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;