import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const ContextApi = React.createContext();

export function useAuth() {
  return useContext(ContextApi);
}

export const ContextApiProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState();
  let [error, setError] = useState(null);
  let [signupError, setSignupError] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setError('');
    setSignupError('');
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        // console.log(`true: ${JSON.stringify(user)}`);
        setLoading(false);
      } else {
        setCurrentUser(null);
        // console.log(`true: ${JSON.stringify(user)}`);
        setLoading(false);
      }
    });
    return unsubscribed;
  }, []);

  const signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.

      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        setError(errorCode);
      } else if (!errorMessage) {
        setError('you are signed in!');
      } else {
        setError(`sign in failed! ${errorMessage}`);
      }
    });
  };

  const signUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        setSignupError('signup failed! The password is too weak!');
      } else if (!error) {
        setSignupError('signed up successfully');
      } else {
        setSignupError(`sign up failed! ${errorMessage}`);
      }
    });
  };

  const resetPassword = (email) => {
    auth.sendPasswordResetEmail(email).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('email not found');
      } else {
        alert(errorMessage);
      }
    });
  };

  const logout = () => {
    return auth.signOut();
  };

  let value = {
    signIn,
    currentUser,
    signUp,
    resetPassword,
    logout,
    error,
    signupError,
  };

  return (
    <ContextApi.Provider value={value}>
      {!loading && children}
    </ContextApi.Provider>
  );
};
