import { useState } from 'react'
import EntryView from './EntryView';

export default function ProfileComponent (props) {

  const [test, setTest] = useState("");

  const entries = [{title: "first post: example", link: "https://waldgrave.com", body: "the waldgrave grows", date: new Date(Date.parse("2024-05-11T22:00:00.000-05:00")), isUnread: true, id: "23weeeee", starred: false}, {title: "second post: wowoowwo", link: "https://waldgrave.com/Login", body: "the login goes", date: new Date(Date.parse("2024-05-11T22:01:00.000-05:00")), isUnread: false, id: "whatdoIDslooklike?", starred: true}];

  const initialFavorites = [
    {
        name: 'Books',
        entries: ["The Lord of the Rings", "Diamond Age", "1984", "To Kill a Mockingbird"]
    },
    {
        name: 'Movies',
        entries: ["Inception", "The Matrix", "The Shawshank Redemption", "Pulp Fiction"]
    },
    {
        name: 'Music',
        entries: ["Bohemian Rhapsody", "Hotel California", "Imagine", "Hey Jude"]
    },
    {
        name: 'TV Shows',
        entries: ["Breaking Bad", "Game of Thrones", "The Office", "Stranger Things"]
    },
    {
        name: 'Games',
        entries: ["The Legend of Zelda: Breath of the Wild", "The Witcher 3", "Minecraft", "Dark Souls"]
    }
];


  const [theProfileEntryList, setTheProfileEntryList] = useState(entries)

  const [favorites, setFavorites] = useState(initialFavorites)

  // todo get list of posts from db

  // use session storage to grab the username, todo

  // todo get list of favorites from db

  // todo check if user is logged in

  // todo edit list of favorites

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1>Profile</h1>
      <span>Name: {props.username}</span>

      <div>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

          {theProfileEntryList.map(element => {
    return (
      <div key={element.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <EntryView entryID={element.id} link={element.link} title={element.title} body={element.body} isUnread={element.isUnread} />
        <br/>
      </div>
    )
  })}
        </div>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h3>Most Recommend</h3>

          {favorites.map(element => {
  return (
    <div key={element.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3>{element.name}</h3>
      <ul style={{ width: '200px', textAlign: 'left' }}>
        {element.entries.map(entry => {
          return <li key={entry}>{entry}</li>
        })}
      </ul>
    </div>
  )
})}
        </div>
      </div>
    </div>
  )
}
