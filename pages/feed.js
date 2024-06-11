import FeedComponent from "../components/FeedComponent";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '../components/loading';
import { auth } from '../firebase';

export default function feed () {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        setLoading(false);
      } else {
        // User is signed out
        router.push('/login');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (<div>
    {user ? <div style={{marginBottom: '-10px', textAlign: 'center'}}>
        <span style={{padding: '5px'}}>Feed</span>
        <Link href='profile' style={{padding: '5px'}}>Profile</Link>
        <Link href='createPost' style={{padding: '5px'}}>Create Post</Link>
        </div> : <div></div>}
    <FeedComponent />
    <WaldFooter />
  </div>)
}
