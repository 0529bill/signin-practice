import React from 'react';
import lightbulb from '../../image/lightbulb.jpg';
import { Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

function UiSignup() {
  let history = useHistory();
  return (
    <div style={{ position: 'relative' }} className="mt-5">
      <img
        src={lightbulb}
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
          top: '30%',
          right: '10%',
          width: '150px',
          fontSize: '2vw',
        }}
      >
        <p>Haven't Sign up for exclusive discount?</p>
        <Button
          variant="dark"
          size="sm"
          onClick={() => history.push('/signin-practice/signup')}
        >
          Sign Up
        </Button>{' '}
      </div>
    </div>
  );
}

export default UiSignup;
