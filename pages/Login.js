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
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      router.push('/feed');

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
      router.push('profile')
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
        router.push('/feed');
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
        {<FeedComponent />}
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
      <h3>What is this?</h3>
      <p>Minimalist social media. The goal is to enable the sharing of what you love without all of the extra bullshit. Posts are limited to 2 in the past week. Your profile lets you share more (feature in progress), but updates there will not make it into the feed. The feed encourages you to be intentional and to highlight what you think is most important. The profile is there to help you share all of your favorite things in one place.</p>
    </div>
  );
}

export default Login;
