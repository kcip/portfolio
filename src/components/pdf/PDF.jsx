import React, { Fragment } from 'react';
import './pdf.scss';
import pdf from '../pdf/scott_pick_resume.pdf';

export default function PDF(props) {

  return (
    <Fragment>
      <div className="pdf--wrapper">
        <div className="pdf--container">
          {pdf && <iframe src={pdf} height="100%" width="100%" />}
        </div>
      </div>

    </Fragment>
  )
}
