import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import linkedin from '../resources/icons/linkedin/linkedin-original.svg';
import github from '../resources/icons/github/github-original-wordmark.svg';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact--container">
        <div className="contact--item top-left"><p className="contact--github">Github</p>
          <p className="svg gitHub" style={{ backgroundImage: `url(${github})`, height: '25px', width: '25px' }}></p>
        </div>
        <div className="contact--item bottom-left"><p className="contact-linkedin">Linkedin</p>
          <p className="svg linkedin" style={{ backgroundImage: `url(${linkedin})`, height: '25px', width: '25px' }}></p>
        </div>
        <div className="contact--item top-right"><p className="contact--resume">Resume</p>
          <FontAwesomeIcon icon={faFilePdf} />
        </div>
        <div className="contact--item bottom-right"><p className="contact--email">Email</p>
          <FontAwesomeIcon icon={faEnvelope} />

        </div>
      </div>
    </div>
  )
}
export default Contact;