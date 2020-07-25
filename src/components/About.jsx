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

      </div>
    </div>
  )
}
export default About;