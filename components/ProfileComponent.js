import { useState, useEffect } from 'react'
import EntryView from './EntryView';
import { auth, db } from '../firebase';
import { getDocs, query, collection, where, doc, getDoc} from 'firebase/firestore';
import { useRouter } from 'next/router';
import Loading from './loading';
import AddNameComponent from './AddNameComponent';
import { useUser } from './UserContext';

export default function ProfileComponent ({ resetFriend, ...props}) {

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
  const [username, setUsername] = useState(props.username ?? useUser().username)
  const [loading, setLoading] = useState(true)
  const router = useRouter();


  useEffect(() => {
    const uid = props.userID

    if (!uid) {
      router.push('/Login')
      return;
    }

    const fetchData = async () => {
      setLoading(true)
      const q = query(collection(db, 'Posts'), where('author', '==', uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      if (data.length == 0) {
        setTheProfileEntryList([])
      }
      else setTheProfileEntryList(data.sort((a, b) => b.timestamp - a.timestamp));
      setLoading(false)
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

  // todo make it so the user can edit all of the space on their profile, like the ability to draw and do art all over it. MS paint style.

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div onClick={resetFriend} className='centeryo'>
      {props.cssname == 'friends' && <span style={{marginTop:'10px'}}>(back)</span>}
      </div>
      {username ? <h4 onClick={resetFriend}>{username}'s profile</h4> : <AddNameComponent />}

      <div>
        <div className='centeryo'>
          {loading ?  <Loading /> : ""}
          {theProfileEntryList.map(element => {
    return (
      <div key={element.id} style={{ border: '1px solid black', padding: '0 25px', margin: '10px', maxWidth: '800px' }}>
        <EntryView entryID={element.id} link={element.link} title={element.title} body={element.content} isUnread={element.isUnread} />
        <br/>
      </div>
    )
  })}
        </div>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '50px'}}>
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

        .centeryo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;}
      `}</style>
    </div>
  )
}
