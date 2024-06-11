import { useState, useEffect } from 'react'
import ProfileComponent from '../components/ProfileComponent'
import Link from 'next/link'
import { auth } from '../firebase'
import router from 'next/router'
import Loading from '../components/loading'

export default function profile () {

  const entries = [{title: "first post: example", link: "https://waldgrave.com", body: "the waldgrave grows", date: new Date(Date.parse("2024-05-11T22:00:00.000-05:00")), isUnread: true, id: "23weeeee", starred: false}, {title: "second post: wowoowwo", link: "https://waldgrave.com/Login", body: "the login goes", date: new Date(Date.parse("2024-05-11T22:01:00.000-05:00")), isUnread: false, id: "whatdoIDslooklike?", starred: true}];

  const [theProfileEntryList, setTheProfileEntryList] = useState(entries)
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

  return (
    <div>
      {user ? <div style={{marginBottom: '-10px', textAlign: 'center'}}>
        <Link href='feed' style={{padding: '5px'}}>Feed</Link>
        <span style={{padding: '5px'}}>Profile</span>
        <Link href='createPost' style={{padding: '5px'}}>Create Post</Link>
        </div> : <div></div>}


      <ProfileComponent />
    </div>
  )
}
