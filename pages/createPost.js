import CreatePostComponent from "../components/CreatePostComponent";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '../components/loading';
import { auth } from '../firebase';
import WaldFooter from "../components/WaldFooter";
import WaldHeader from "../components/WaldHeader";

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
        router.push('/Login');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (<div>
    {user ? <WaldHeader page='createPost' /> : <div></div>}
    <CreatePostComponent />
    <WaldFooter />
  </div>)
}
