import CreatePostComponent from "../components/CreatePostComponent";
import { useState } from 'react';
import Link from 'next/link';

export default function feed () {
  const [user, setUser] = useState(true);

  return (<div>
    {user ? <div style={{marginBottom: '-10px', textAlign: 'center'}}>
        <Link href='feed' style={{padding: '5px'}}>Feed</Link>
        <Link href='profile' style={{padding: '5px'}}>Profile</Link>
        </div> : <div></div>}
    <CreatePostComponent />
  </div>)
}
