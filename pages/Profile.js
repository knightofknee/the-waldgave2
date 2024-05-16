import EntryView from '../components/EntryView'
import { useState } from 'react'
import ProfileComponent from '../components/ProfileComponent'

export default function Profile () {

  const entries = [{title: "first post: example", link: "https://waldgrave.com", body: "the waldgrave grows", date: new Date(Date.parse("2024-05-11T22:00:00.000-05:00")), isUnread: true, id: "23weeeee", starred: false}, {title: "second post: wowoowwo", link: "https://waldgrave.com/Login", body: "the login goes", date: new Date(Date.parse("2024-05-11T22:01:00.000-05:00")), isUnread: false, id: "whatdoIDslooklike?", starred: true}];

  const [theProfileEntryList, setTheProfileEntryList] = useState(entries)

  return (
    <div>
      <ProfileComponent />
      {/* <h1>Username</h1>
      { <ol>
        {entries.map(e => {
          return (<li>
          <EntryView entryID={e.ID} name={e.name} link={e.link} description={e.description}/>
        </li>)
        })}
      </ol> }
      {theProfileEntryList.map(element => {
      return <EntryView key={element.id} entryID={element.id} link={element.link} title={element.title} body={element.body} isUnread={element.isUnread} />
    })} */}
    </div>
  )
}
