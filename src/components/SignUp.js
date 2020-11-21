import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contextApi/contextApi';
import { Link, Redirect } from 'react-router-dom';

function SignUp() {
  const { signUp, signupError, currentUser } = useAuth();

  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => setError(''));

  let handleSubmit = async (e) => {
    e.preventDefault();
    setError(signupError);

    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('handleSubmit went wrong!');
    }

    setLoading(false);
  };

  return (
    <div>
      {currentUser ? (
        <Redirect to="/signin-practice/dashboard" />
      ) : (
        <div style={{ backgroundColor: '#88807B' }}>
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh' }}
          >
            <Card className="shadow">
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {signupError && <Alert variant="danger">{signupError}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      ref={emailRef}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={passwordRef}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={loading}
                    className="w-100"
                  >
                    Submit
                  </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  Need an account?{' '}
                  <Link to="/signin-practice/signIn">Sign In</Link>
                </div>
                <div className="w-100 text-center mt-2">
                  Forgot password?{' '}
                  <Link to="/signin-practice/forgotpassword">Click here</Link>
                </div>
                <div className="w-100 text-center mt-2">
                  Back to <Link to="/signin-practice">Home page</Link>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
}

export default SignUp;
