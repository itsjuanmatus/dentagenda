import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { app } from '../firebase/clientApp';
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    GithubAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
};

export default function Auth() {
  const auth = getAuth(app);
  return (
    <div className="w-full m-auto min-h-screen flex flex-col">
      <h1>Login</h1>
      <p>Please sign in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}
