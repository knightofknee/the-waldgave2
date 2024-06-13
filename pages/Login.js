import React, { useEffect, useState } from 'react';
import {auth} from '../firebase';
import 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import FeedComponent from '../components/FeedComponent';
import Loading from '../components/loading';
import { useRouter } from 'next/router';
import WaldHeader from '../components/WaldHeader';

function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);
  const [view, setView] = useState('feed');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleViewChange = (newView) => {
    setView(newView);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("usewrrrrrrrrrrrrrr", userCredential.user);
      setUser(userCredential.user);
      router.push('/Feed');

    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email2, password2);
      setUser(userCredential.user);
      router.push('Profile')
    } catch (error) {
      console.log(error);
      setError2(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        setLoading(false);
        router.push('/Feed');
      } else {
        // User is signed out
        setUser(null);
        setLoading(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

    if (user) {
      return <div>
        <WaldHeader page='feed' />
        {view === 'feed' && <FeedComponent />}
      </div>;
    }
    if (loading) {
      return <Loading />
    }
 // need signup and a little styling, maybe session storageff
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}  >
      <h1>The Waldgrave</h1>
      <h3>Log In</h3>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
      {error ? <div style={{color: 'blue'}}>{error}</div> : <div style={{height: '18px'}}></div>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign in</button>
      </form>
      <h3>Sign Up</h3>
      {error2 ? <div style={{color: 'blue'}}>{error2.toLowerCase().includes("firebase") ? error2.replace("Firebase: ","") : "error"}</div>
      : <div style={{height: '18px'}}></div>}
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email2} onChange={(e) => setEmail2(e.target.value)} required />
        <input type="password" placeholder="Password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Login;
