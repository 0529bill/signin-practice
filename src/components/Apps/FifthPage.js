import React from 'react';

import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FifthPage() {
  return (
    <>
      <div className="pt-3" id="Contactus">
        <div
          className="text-center m-3"
          style={{ fontSize: '3vh', fontFamily: 'Open Sans, sans-serif' }}
        >
          Contact Us
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ fontSize: '2vh', marginRight: '10px' }}
          />
          <span style={{ fontSize: '2vh' }}>0966-599-072</span>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: '2vh', marginRight: '10px' }}
          />
          <span style={{ fontSize: '2vh' }}>0529bill@gmailc.com</span>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ fontSize: '2vh', marginRight: '10px' }}
          />
          <span style={{ fontSize: '2vh' }}>No. 89松仁路信義區台北市110</span>
        </div>

        <div className="m-2 text-center mt-4 pb-3" style={{ fontSize: '2vh' }}>
          water@ All Right Reserved
        </div>
      </div>
    </>
  );
}

export default FifthPage;
