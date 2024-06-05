import React, { useEffect, useState } from 'react';
import {auth} from '../firebase';
import 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import FeedComponent from '../components/FeedComponent';
import ProfileComponent from '../components/ProfileComponent';

function Login2() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [view, setView] = useState('feed');

  const handleViewChange = (newView) => {
    setView(newView);
  }

  console.log("eeeeeeeeeeee", auth.app)

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   // Initialize FirebaseUI
  //   const uiConfig = {
  //     signInSuccessWithAuthResult: (authResult, redirectUrl) => {
  //       // User successfully signed in.
  //       console.log("wrrrrrrrrrrrrrr", authResult.user);
  //       // You can change the URL with window.history.pushState.
  //       window.history.pushState({}, null, 'waldgrave.com/discover');
  //       // Return type determines whether we continue the redirect automatically
  //       // or whether we leave that to developer to handle.
  //       return false;
  //     },
  //     signInOptions: [
  //       // List the providers you want to offer your users.
  //       firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     ],
  //   };
  //   const ui = new firebaseui.auth.AuthUI(auth);
  //   ui.start('#firebaseui-auth-container', uiConfig);

  //   const unregisterAuthObserver = auth.onAuthStateChanged(user => {
  //     setUser(user);
  //   });
  //   return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  // }, []);

    if (user) {
      return <div>

        <button onClick={() => handleViewChange('feed')}>Feed</button>
        <button onClick={() => handleViewChange('profile')}>Profile</button>

        {view === 'feed' && <FeedComponent />}
        {view === 'profile' && <ProfileComponent />}
      </div>;
    }
 // need signup and a little styling, maybe session storage
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default Login2;
