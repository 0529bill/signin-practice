import React from 'react';
import { Container } from 'react-bootstrap';

function FourthPage() {
  return (
    <Container className="mt-4 mb-4" style={{}} id="Location">
      <div
        className="text-center m-3"
        style={{ fontSize: '3vh', fontFamily: 'Open Sans, sans-serif' }}
      >
        Location
      </div>
      <div style={{ fontSize: '2vh' }} className="text-center m-3">
        Address: No. 89松仁路信義區台北市110
      </div>
      <div className="d-flex justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14459.658888902573!2d121.55996978740166!3d25.03696794478925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abba8be4a2b5%3A0x3f26b2d91968ee27!2z5a6P5rOw5Lqk5piT5buj5aC0!5e0!3m2!1szh-TW!2stw!4v1605571223910!5m2!1szh-TW!2stw"
          style={{
            width: '100%',
            height: '350px',
            maxWidth: '600px',
            maxHeight: '500px',
            frameBorder: '0',
            // style: 'border:5px',
            allowFullScreen: 'true',
            ariaHidden: 'false',
            tabIndex: '0',
          }}
        ></iframe>
      </div>
    </Container>
  );
}

export default FourthPage;
