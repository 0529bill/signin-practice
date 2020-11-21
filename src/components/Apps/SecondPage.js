import React from 'react';

import { Container, Row } from 'react-bootstrap';
import {
  faAdjust,
  faDraftingCompass,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SecondPage() {
  let style = {
    border: '1px solid #e6e6e6',
    width: '100px',
    height: '100px',
    textAlign: 'center',
    borderRadius: '50%',
    alignItems: 'center',
    lineHeight: '100px',
  };
  return (
    <Container className="mb-4">
      <Row
        className="justify-content-center"
        style={{ marginTop: '8vh', fontSize: '3vw' }}
      >
        <div style={{ fontSize: '3vh', fontFamily: 'Open Sans, sans-serif' }}>
          Welcome to Flourish
        </div>
        {/* <h5>Welcome to Flourish</h5> */}
      </Row>
      <Row className="justify-content-center mt-3" style={{ fontSize: '2vh' }}>
        <div className="justify-content-center m-2 ">
          Our goal is to provide state-of-arts lightning products to the world.
        </div>
      </Row>
      <Row className="justify-content-center mt-3">
        <div className="m-3">
          <div style={style}>
            <FontAwesomeIcon icon={faAdjust} size="lg" />
          </div>
          <div className="text-center mt-3">Auto Adjust</div>
        </div>
        <div className="m-3">
          <div style={style}>
            <FontAwesomeIcon icon={faDraftingCompass} size="lg" />
          </div>
          <div className="text-center mt-3">Clean Design</div>
        </div>
        <div className="m-3">
          <div style={style}>
            <FontAwesomeIcon icon={faLeaf} size="lg" />
          </div>
          <div className="text-center mt-3">Eco friendly</div>
        </div>
      </Row>
    </Container>
  );
}

export default SecondPage;
