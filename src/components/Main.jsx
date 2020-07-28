import React from "react";
import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import github from '../resources/icons/github/github-original-wordmark.svg';
import linkedin from '../resources/icons/linkedin/linkedin-original.svg';
const Main = () => {
  return (
    <div className="main">
      <div className="main--container">
        <p className="main--intro">Hello, my name is</p>
        <h1 className="main--name">Scott<span>.</span></h1>
        <p className="main--subheading">I'm a software developer based in New York City.</p>

      </div>
      <div className="main--contactInfo">
        <div className="main--contact">
          <p className="svg gitHub" style={{ backgroundImage: `url(${github})`, height: '30px', width: '30px' }}>
            <a className="linkOut" target="_blank" href="https://github.com/kcip?tab=repositories" rel="noopener noreferrer"></a>
          </p>
        </div>
        <div className="main--contact">
          <a className="linkOut email" href="mailto:scottepick@gmail.com" rel="noopener noreferrer">
            <p><FontAwesomeIcon icon={faEnvelope} /></p>
          </a>

        </div>
        <div className="main--contact">
          <p className="svg linkedin" style={{ backgroundImage: `url(${linkedin})`, height: '30px', width: '30px' }}>
            <a className="linkOut" target="_blank" href="https://www.linkedin.com/in/scott-pick-121a5519b/" rel="noopener noreferrer"></a>
          </p>
        </div>
      </div>
    </div>
  )

};
export default Main;
