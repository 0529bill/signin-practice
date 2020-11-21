import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let NotFound = () => {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center text-center"
        style={{
          minHeight: '100vh',
          flexDirection: 'column',
        }}
      >
        <h1> 404 not Found!</h1>
        <div className="mt-4">
          <Link to="/signin-practice">
            <Button>Back to main page</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
