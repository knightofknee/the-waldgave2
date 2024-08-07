import { useState, useEffect } from 'react'
import EntryView from './EntryView';
import { auth, db } from '../firebase';
import { getDocs, query, collection, where, doc, getDoc} from 'firebase/firestore';
import { useRouter } from 'next/router';
import Loading from './loading';
import AddNameComponent from './AddNameComponent';
import { useUser } from './UserContext';
import FavoritesForm from '../othercomponents/FavoritesForm';
import FavoritesDisplay from '../othercomponents/FavoritesDisplay';

export default function ProfileComponent ({ resetFriend, ...props}) {

  const initialFavorites = [
    {
        name: 'Books',
        entries: [{value: "", id: 0}],
        id: 0
    },
    {
        name: 'Movies',
        entries: [{value: "", id: 1}],
        id: 1
    },
    {
        name: 'Music',
        entries: [{value: "", id: 2}],
        id: 2
    },
    {
        name: 'TV Shows',
        entries: [{value: "", id: 3}],
        id: 3
    },
    {
      name: 'People to follow',
      entries: [{value: "", id: 4}],
      id: 4
    }
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

  const fetchFavorites = async () => {

    const uid = props.userID

    if (!uid) {
      return;
    }
    const docRef = doc(db, 'Favorites', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setFavorites(docSnap.data().favorites);
    } else {
      setDemo(true)
      setFavorites(initialFavorites)
    }
  };

  useEffect(() => {




    fetchFavorites();
  }, [props.userID]); // Only run this effect when props.user changes

  // todo check if user is logged in? security?

  // todo edit past posts

  // todo make it so the user can edit all of the space on their profile, like the ability to draw and do art all over it. MS paint style.

  const [editList, setEditList] = useState(false)

  const setEditListWrapper = (value) => {

    setEditList(value)
    if (!value) {
      fetchFavorites()
    }
   }

  const [showAll, setShowAll] = useState(false)

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div onClick={resetFriend} className='centeryo'>
      {props.cssname == 'friends' && <span style={{marginTop:'10px'}}>(back)</span>}
      </div>
      {username ? <h4 onClick={resetFriend}>{username}'s profile</h4> : <AddNameComponent />}

      <div>
        <div className='centeryo'>
          {loading ?  <Loading /> : ""}
          {theProfileEntryList.slice(0, showAll ? undefined : 5).map(element => {
    return (
      <div className='postEntry' key={element.id}>
        <EntryView entryID={element.id} link={element.link} title={element.title} body={element.content} isUnread={element.isUnread} authorName={username} />
        <br/>
      </div>
    )
  })}
  {theProfileEntryList.length > 5 && <button type='click' onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Show All Posts'}
      </button>}
        </div>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '50px'}}>
          <h3>Most Recommend</h3>
          {demo && <p className='IntroP'>
      Here you can share your favorite things through lists. The default includes some basics so that you can compare to your friends' lists and easily find new media or shared interests. You can also add your own lists to share what you love.</p>}
      {!editList && props.userType == 'profile' && <button onClick={() => setEditList(true)}>Edit your lists</button>}
      {props.userType == 'profile' && editList && <FavoritesForm setEditList={setEditListWrapper} userUid={props.userID} favorites={favorites} />}
      {(props.userType == 'friend' || !editList) && <FavoritesDisplay userID={props.userID} favorites={favorites} />}
          {/* {favorites.map(element => {
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
})} */}
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

          .postEntry {
            border: 1px solid black;
            padding: 0 25px;
            margin: 10px;
            max-width: 800px;
          }

          @media (max-width: 800px) {
  .postEntry {
    width: 90%;
    max-width: 800px;
  }
}
      `}</style>
    </div>
  )
}
