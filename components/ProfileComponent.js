import { useState, useEffect } from 'react'
import EntryView from './EntryView';
import { auth, db } from '../firebase';
import { getDocs, query, collection, where, doc, getDoc} from 'firebase/firestore';
import { useRouter } from 'next/router';
import Loading from './loading';

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
];

  const [theProfileEntryList, setTheProfileEntryList] = useState([])
  const [favorites, setFavorites] = useState([])
  const [demo, setDemo] = useState(false)
  const router = useRouter();


  useEffect(() => {
    console.log('props', props.user);
    const uid = props.user ?? auth.currentUser?.uid;

    if (!uid) {
      router.push('/Login')
      return;
    }

    const fetchData = async () => {
      const q = query(collection(db, 'Posts'), where('author', '==', uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTheProfileEntryList(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const uid = props.user ?? auth.currentUser?.uid;

    if (!uid) {
      return;
    }

    const fetchFavorites = async () => {
      const docRef = doc(db, 'Favorites', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFavorites(docSnap.data().lists); // assuming the field is named 'lists'
      } else {
        setDemo(true)
        setFavorites(initialFavorites)
      }
    };

    fetchFavorites();
  }, [props.user]); // Only run this effect when props.user changes

  // todo get list of favorites from db

  // todo check if user is logged in? security?

  // todo edit list of favorites

  // todo edit past posts

  // todo if you want to be public, you set a name and then we use that as the slug for profiles/slug. otherwise you can only see friends profiles within the friends component? that way we dont need to expose an endpoint for private users?

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'auto'}}>
      <h1>Profile</h1>
      <span>Name: {props.username}</span>

      <div>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          {theProfileEntryList.length == 0 && <Loading />}
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
          {demo && <p>These are demo favorites. You can edit them in your profile. These will be used in the future to help you find new content or someone to discuss with.</p>/* todo */}
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
