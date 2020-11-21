import React from 'react';
import CountUp from 'react-countup';
import { faTasks, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ThirdPage() {
  return (
    <>
      <div
        className="pt-3 pb-3"
        style={{ backgroundColor: '#282e35', color: 'white', width: '100%' }}
      >
        <div className="justify-content-center text-center mt-3">
          <div className="p-3">
            <div style={{ fontFamily: 'Unna, serif', fontSize: '3vh' }}>
              <FontAwesomeIcon
                icon={faTasks}
                style={{ fontSize: '3vh', marginRight: '10px' }}
              />
              <CountUp end={139} duration={2.75} delay={8} />
              <p style={{ fontSize: '3vh' }}>Tasks completed</p>
            </div>
          </div>
          <div className="p-3">
            <div style={{ fontFamily: 'Unna, serif', fontSize: '3vh' }}>
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                style={{ fontSize: '3vh', marginRight: '10px' }}
              />
              <CountUp end={12030} duration={4} delay={8} />
              <p className="" style={{ fontSize: '3vh' }}>
                Clients in the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdPage;
