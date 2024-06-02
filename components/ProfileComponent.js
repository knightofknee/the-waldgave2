import { useState } from 'react'
import EntryView from './EntryView';

export default function ProfileComponent (props) {

  const [test, setTest] = useState("");

  const entries = [{title: "first post: example", link: "https://waldgrave.com", body: "the waldgrave grows", date: new Date(Date.parse("2024-05-11T22:00:00.000-05:00")), isUnread: true, id: "23weeeee", starred: false}, {title: "second post: wowoowwo", link: "https://waldgrave.com/Login", body: "the login goes", date: new Date(Date.parse("2024-05-11T22:01:00.000-05:00")), isUnread: false, id: "whatdoIDslooklike?", starred: true}];

  const [theProfileEntryList, setTheProfileEntryList] = useState(entries)


  // use session storage to grab the username, todo

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1>Profile</h1>
      <span>Name: {props.username}</span>

      <div>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          show entries. on full screen these are main, on mobile there's a toggle

          {theProfileEntryList.map(element => {
      return <div key={element.id}><EntryView entryID={element.id} link={element.link} title={element.title} body={element.body} isUnread={element.isUnread} /><br/></div>
    })}
        </div>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h3>Favorite books</h3>
          <ol>
            <li>Ender's game</li>
          </ol>
          <h3>Favorite shows</h3>
          <ol>
            <li>Under Ninja</li>
          </ol>
          <h3>Favorite movies</h3>
          <ol>
            <li>Lord of the Rings</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
