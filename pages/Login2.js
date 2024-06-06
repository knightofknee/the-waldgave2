import React, { useEffect, useState } from 'react';
import {auth} from '../firebase';
import 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import FeedComponent from '../components/FeedComponent';
import ProfileComponent from '../components/ProfileComponent';

function Login2() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);
  const [view, setView] = useState('feed');

  const handleViewChange = (newView) => {
    setView(newView);
  }

  console.log("eeeeeeeeeeee", auth.app)

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("usewrrrrrrrrrrrrrr", userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email2, password2);
      console.log("usewrrrrrrrrrrrrrr2", userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
      setError2(error.message);
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
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}  >
      <h1>The Waldgrave</h1>
      <h3>Log In</h3>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
      {error ? <div style={{color: 'red'}}>{error}</div> : <div style={{height: '18px'}}></div>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign in</button>
      </form>
      <h3>Sign Up</h3>
      {error2 && <div style={{color: 'red'}}>{error2.includes("user-not-found") ? "user not found" : "error"}</div>}
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email2} onChange={(e) => setEmail2(e.target.value)} required />
        <input type="password" placeholder="Password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Login2;
