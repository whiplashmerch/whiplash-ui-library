import React from 'react';
import logo from './images/ui-lib-logo.svg';

import './Home.css';


const Home = (props) => (
  <div className="Home">
    <header className="Home-header">
      <h3 className="Home-headline">
        <img
          alt="whiplash ui library logo"
          className="Home-logo"
          src={ logo }
        />
      </h3>
    </header>

    <div className="Home-feature">
      <p className="Home-description">
        This is a living source of the Whiplash Merch UI Library of React
        Components. We are constantly adding to and taking away from this
        package so keep your eyes peeled on the
        <a
          className="Home-change-link"
          href="https://github.com/whiplashmerch/whiplash-ui-library/blob/master/CHANGELOG.md"
        >
          CHANGELOG
        </a>
        docs.
      </p>

      <p className="Home-description">
        Our goal is to have a fully functioning React Component UI library
        by mid 2017 (officially the 1.0 release).
      </p>

      <p className="Home-description">
        If there is more info you would like provided in our docs, just file
        and issue and we'll get to it ASAP.
      </p>

      <p className="Home-description">
        Thanks for checking us out and stay tuned for further info.
      </p>
    </div>
  </div>
);


export default Home;
