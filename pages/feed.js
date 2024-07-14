import FeedComponent from "../components/FeedComponent";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '../components/loading';
import { auth } from '../firebase';
import router from 'next/router';
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

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (<div>
    {user ? <WaldHeader page='feed' /> : <div></div>}
    <FeedComponent />
    <WaldFooter />
  </div>)
}
