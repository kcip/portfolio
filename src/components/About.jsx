import React from 'react';
import './about.scss';
import image from '../resources/photos/me.jpeg';
import jss from '../resources/icons/javascript/javascript-plain.svg';
import css from '../resources/icons/css3/css3-plain.svg';
import html from '../resources/icons/html5/html5-plain.svg'
import sass from '../resources/icons/sass/sass-original.svg'
import react from '../resources/icons/react/react-original.svg';
import jquery from '../resources/icons/jquery/jquery-plain.svg'
import mongo from '../resources/icons/mongodb/mongodb-plain.svg'
import rails from '../resources/icons/rails/rails-original-wordmark.svg'
import postgresql from '../resources/icons/postgresql/postgresql-original-wordmark.svg';
import git from '../resources/icons/git/git-original.svg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import linkedin from '../resources/icons/linkedin/linkedin-original.svg';
import github from '../resources/icons/github/github-original-wordmark.svg';

const About = () => {

  return (
    <div className="about">
      <div className="about--container">

        <div className="about--side profile--photo" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="about--side profile--info">
          <h3>about me...</h3>
          <p>I am a Software Developer who enjoys building web applications using React, Mongo DB & Ruby on Rails. In addition to my experience in software engineering, I also have a background in academic management and international and cross cultural education. I am seeking a role where my passion about technology and creativity can assist others as well as push me to learn and grow as a developer .</p>
          <div className="about--side profile--skills">
            <p>my skills:</p>
            <div className="skills">
              <span className="svg" style={{ backgroundImage: `url(${react})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${jss})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${sass})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${css})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${html})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${jquery})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${mongo})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${rails})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${postgresql})` }}></span>
              <span className="svg" style={{ backgroundImage: `url(${git})` }}></span>
            </div>
          </div>
        </div>
        <div className="about--contact">
          <div className="about--header">
            <p className="about--text">contact information</p>
          </div>
          <div className="about--contactContainer">
            <div className="about--contacts email">
              <p clasName="contact-info"><FontAwesomeIcon icon={faEnvelope} style={{ height: '25px', width: '25px' }} /></p>
              <p className="contact-p">email</p>
            </div>
            <div className="about--contacts linkedin">
              <p clasName="contact-info" style={{ backgroundImage: `url(${linkedin})`, height: '25px', width: '25px' }}></p>
              <p className="contact-p">linkedin</p>
            </div>

            <div className="about--contacts github">
              <p clasName="contact-info" style={{ backgroundImage: `url(${github})`, height: '25px', width: '25px' }}></p>
              <p className="contact-p">github</p>
            </div>

            <div className="about--contacts resume">
              <p clasName="contact-info"><FontAwesomeIcon icon={faFilePdf} style={{ height: '25px', width: '25px' }} /></p>
              <p className="contact-p">resume</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
export default About;