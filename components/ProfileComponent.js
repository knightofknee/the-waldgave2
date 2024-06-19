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
        entries: ["The Lord of the Rings", "Diamond Age", "1984", ""]
    },
    {
        name: 'Movies',
        entries: [""]
    },
    {
        name: 'Music',
        entries: [""]
    },
    {
        name: 'TV Shows',
        entries: [""]
    },
];

  const [theProfileEntryList, setTheProfileEntryList] = useState([])
  const [favorites, setFavorites] = useState([])
  const [demo, setDemo] = useState(false)
  const [username, setUsername] = useState('')
  const router = useRouter();


  useEffect(() => {
    const uid = props.userID

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

    const fetchData2 = async () => {
      const profileDocRef = doc(db, 'Profiles', uid);
      const profileDocSnap = await getDoc(profileDocRef);

      if (profileDocSnap.exists()) {
        setUsername(profileDocSnap.data().username);
      }
    }

    fetchData();
    fetchData2();
  }, []);

  useEffect(() => {
    const uid = props.userID

    if (!uid) {
      return;
    }

    const fetchFavorites = async () => {
      const docRef = doc(db, 'Favorites', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFavorites(docSnap.data().lists);
      } else {
        setDemo(true)
        setFavorites(initialFavorites)
      }
    };

    fetchFavorites();
  }, [props.userID]); // Only run this effect when props.user changes

  // todo get list of favorites from db

  // todo check if user is logged in? security?

  // todo edit list of favorites

  // todo edit past posts

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'auto'}}>
      <h1>Profile</h1>
      <span>Name: {username}</span>

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
          {demo && <p className='IntroP'>
      Here you can share your favorite things through lists. The default includes some basics so that you can compare to your friends' lists and easily find new media or shared interests. You can also add your own lists to share what you love.</p>}
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
      <style jsx>{`
        .IntroP {
          width: 80%;
          margin: 10px;
        }
        @media (min-width: 768px) {
          .IntroP {
            width: 50%;
          }
        }
      `}</style>
    </div>
  )
}
