import FeedComponent from "../components/FeedComponent";
import { useState } from 'react';
import Link from 'next/link';

export default function feed () {
  const [user, setUser] = useState(true);

  return (<div>
    {user ? <div style={{marginBottom: '-10px', textAlign: 'center'}}>
        <Link href='profile' style={{padding: '5px'}}>Profile</Link>
        <Link href='createPost' style={{padding: '5px'}}>Create Post</Link>
        </div> : <div></div>}
    <FeedComponent />
  </div>)
}
