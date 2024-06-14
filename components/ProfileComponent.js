import { useState, useEffect } from 'react'
import EntryView from './EntryView';
import { auth, db } from '../firebase';
import { getDocs, query, collection, where } from 'firebase/firestore';

export default function ProfileComponent (props) {

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

  const [theProfileEntryList, setTheProfileEntryList] = useState([])
  const [favorites, setFavorites] = useState(initialFavorites)

  const uid = auth.currentUser.uid;

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'Posts'), where('author', '==', uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTheProfileEntryList(data);
    };

    fetchData();
  }, [uid]);

  // todo get list of favorites from db

  // todo check if user is logged in? security?

  // todo edit list of favorites

  // todo edit past posts

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1>Profile</h1>
      <span>Name: {props.username}</span>

      <div>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

          {theProfileEntryList.map(element => {
    return (
      <div key={element.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <EntryView entryID={element.id} link={element.link} title={element.title} body={element.content} isUnread={element.isUnread} />
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
