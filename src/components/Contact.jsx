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
        <div className="contact--item top-left"><p className="contact--github contact-text">Github</p>
          <p className="svg gitHub grid-center" style={{ backgroundImage: `url(${github})`, height: '80px', width: '80px' }}></p>
        </div>
        <div className="contact--item bottom-left"><p className="contact--linkedin contact-text">Linkedin</p>
          <p className="svg linkedin grid-center" style={{ backgroundImage: `url(${linkedin})`, height: '80px', width: '80px' }}></p>
        </div>
        <div className="contact--item top-right"><p className="contact--resume contact-text">Resume</p>
          <p className="grid-center"><FontAwesomeIcon icon={faFilePdf} style={{ height: '80px', width: '80px' }} /></p>
        </div>
        <div className="contact--item bottom-right"><p className="contact--email contact-text">Email</p>
          <p className="grid-center"><FontAwesomeIcon icon={faEnvelope} style={{ height: '80px', width: '80px' }} /></p>
        </div>
      </div>
    </div>
  )
}
export default Contact;