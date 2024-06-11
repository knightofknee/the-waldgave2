import CreatePostComponent from "../components/CreatePostComponent";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '../components/loading';
import { auth } from '../firebase';
import WaldFooter from "../components/WaldFooter";

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
        <Link href='feed' style={{padding: '5px'}}>Feed</Link>
        <Link href='profile' style={{padding: '5px'}}>Profile</Link>
        <span style={{padding: '5px'}}>Create Post</span>
        </div> : <div></div>}
    <CreatePostComponent />
    <WaldFooter />
  </div>)
}
