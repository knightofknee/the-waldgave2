import { useState } from 'react'
import ProfileComponent from '../components/ProfileComponent'
import Link from 'next/link'

export default function profile () {

  const entries = [{title: "first post: example", link: "https://waldgrave.com", body: "the waldgrave grows", date: new Date(Date.parse("2024-05-11T22:00:00.000-05:00")), isUnread: true, id: "23weeeee", starred: false}, {title: "second post: wowoowwo", link: "https://waldgrave.com/Login", body: "the login goes", date: new Date(Date.parse("2024-05-11T22:01:00.000-05:00")), isUnread: false, id: "whatdoIDslooklike?", starred: true}];

  const [theProfileEntryList, setTheProfileEntryList] = useState(entries)
  const [user, setUser] = useState(true);

  return (
    <div>
      {user ? <div style={{marginBottom: '-10px', textAlign: 'center'}}>
        <Link href='feed' style={{padding: '5px'}}>Feed</Link>
        <Link href='createPost' style={{padding: '5px'}}>Create Post</Link>
        </div> : <div></div>}


      <ProfileComponent />
    </div>
  )
}
