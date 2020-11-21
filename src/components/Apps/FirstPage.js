import React from 'react';
import { Button } from 'react-bootstrap';

import Navs from './Navs';
import whiteBackground from '../../image/whiteBackground.jpeg';
import { useHistory } from 'react-router-dom';

function FirstPage() {
  let history = useHistory();

  return (
    <>
      <Navs />
      <div style={{ position: 'relative' }} id="Main">
        <img
          src={whiteBackground}
          alt="background"
          style={{
            objectFit: 'cover',
            maxHeight: '630px',
            width: '100%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '15%',
            width: '200px',
            fontSize: '2vw',
          }}
        >
          <p>Light up your life.</p>
          <Button
            variant="dark"
            size="sm"
            onClick={() => history.push('/signin-practice/signin')}
          >
            Sign In to shop
          </Button>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
