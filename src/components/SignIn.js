import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contextApi/contextApi';
import { Link } from 'react-router-dom';
import { useHistory, Redirect } from 'react-router-dom';

function SignIn() {
  const { signIn, currentUser, error } = useAuth();

  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('handleSubmit went wrong!');
    }
    setLoading(false);
  }

  return (
    <div>
      {currentUser ? (
        <Redirect to="/dashboard" />
      ) : (
        <div style={{ backgroundColor: '#a9a9a9' }}>
          <Container
            className="signin d-flex align-items-center justify-content-center"
            style={{
              minHeight: '100vh',
            }}
          >
            <Card className="shadow">
              <Card.Body>
                <h2 className="text-center mb-4">Sign In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      ref={emailRef}
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
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
                  Need an account? <Link to="/signup">Sign up</Link>
                </div>
                <div className="w-100 text-center mt-2">
                  Forgot password? <Link to="/forgotpassword">Click here</Link>
                </div>
                <div className="w-100 text-center mt-2">
                  Back to <Link to="/">Home page</Link>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
}

export default SignIn;
