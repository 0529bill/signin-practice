import React from 'react';
import { useAuth } from '../contextApi/contextApi';
import { Card, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  let handleLogout = async () => {
    try {
      await logout();
      history.push('/signin-practice');
    } catch {
      alert('failed to logout!');
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <Card>
        <Card.Body className="text-center">
          <h1 className="text-center mb-4">Congrats! Login successfully</h1>
          <h2 className="text-center mb-4">Our Shop is under maintenance!</h2>
          <strong>Your Email:</strong> {currentUser ? currentUser.email : null}
          <p className="mt-2">Contact 0529bill@gmail.com for further notice!</p>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Dashboard;
