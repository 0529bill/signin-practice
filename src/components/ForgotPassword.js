import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useAuth } from '../contextApi/contextApi';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const { resetPassword } = useAuth();

  const emailRef = React.useRef(null);

  const [loading, setLoading] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log('connected');

    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
    } catch {
      alert('handleSubmit went wrong!');
    }

    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: '#D9DDDC' }}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Reset password</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Type in your email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                className="w-100"
              >
                Reset password
              </Button>
            </Form>
            <div className="w-100 text-center mt-4">
              Already have an account?{' '}
              <Link to="/signin-practice/signIn">Sign In</Link>
            </div>
            <div className="w-100 text-center mt-2">
              Back to <Link to="/signin-practice">Home page</Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ForgotPassword;
