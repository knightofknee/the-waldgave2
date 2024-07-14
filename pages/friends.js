import { useEffect, useState } from 'react';
import WaldHeader from '../components/WaldHeader';
import WaldFooter from '../components/WaldFooter';
import ProfileComponent from '../components/ProfileComponent';
import { auth, db } from '../firebase';
import { doc, setDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import AddNameComponent from '../components/AddNameComponent';

export default function Friends() {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);
  const [username, setUsername] = useState('');

  const [usernameInput, setUsernameInput] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [errorMessage2, setErrorMessage2] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNewNameSubmit = async (event) => {
    event.preventDefault();

    const docRef = doc(db, 'Friends', usernameInput);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setErrorMessage('Username is already used.');
    } else {
      await setDoc(docRef, { name: usernameInput });
      setUsernameInput('');
      setErrorMessage('');
      setUsername(usernameInput);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const userUid = auth.currentUser.uid;
    const friendsListRef = doc(db, 'Friends', userUid);

    try {

      const friendToBeAddedRef = doc(db, 'Profiles', name);
      const friendToBeAddedSnap = await getDoc(query(friendToBeAddedRef, where('username', '==', name)));

      if (!friendToBeAddedSnap.exists()) {
        setErrorMessage2('Friend not found');
        return;
    }
    const friendUid = friendToBeAddedSnap.id;
    const friendData = { username: name, uid: friendUid };

    await setDoc(friendsListRef, { friends: arrayUnion(friendData) }, { merge: true }); // Create or update the document

    setFriends([...friends, name]);
    setName('');

    alert('Friend added! 🎉');
  } catch (error) {
    console.error("Error adding friend: ", error);
    alert('Failed to add friend');
  }
  };

  const [friendUserID, setFriendUserID] = useState(null);
  const [friendUsername, setFriendUsername] = useState(null);

  const resetFriend = () => {
    setFriendUserID(null);
    setFriendUsername(null);
    window.location.hash = ``
  }

  const handleFriendClick = (event) => {
    setFriendUserID(event.target.id);
    const friendName = event.target.innerText;
    setFriendUsername(friendName);

    window.location.hash = `#${friendName}`
  }

  useEffect(() => {
    const handleHashChange = () => {
      const friendName = window.location.hash.replace('#', '');
      setFriendUserID(friendName)
    };

    // Add hash change listener
    window.addEventListener('hashchange', handleHashChange);

    // Remove listener on component unmount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchFriends = async () => {
          const userUid = user.uid;
          const docRef = doc(db, 'Friends', userUid);
          const docSnap = await getDoc(docRef);

          console.log(docSnap.data());
          if (docSnap.exists()) {
            setFriends(docSnap.data().friends);
          }
        };

        fetchFriends();
      }
    });

    return () => unsubscribe();
  }, []);
// show friends as clickable items. and fix how they look so you know who's profile it is. todo
  return (
    <div>
      <WaldHeader page='friends' />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Friends</h1>
      <AddNameComponent />
      <div>
        <h2>Add a Friend</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <button type="submit">Add Friend</button>
        </form>
        {errorMessage2 && <p>{errorMessage2}</p>}
      </div>
      {!friendUserID ? <div>
        <h2>My Friends</h2>
        <ul>
          {friends.map((friend, index) => (
            <li key={index} onClick={handleFriendClick} id={friend.uid}>{friend.username}</li>
          ))}
          {friends.length === 0 && <li onClick={handleFriendClick} id='weee' >Carl</li>}
        </ul>
      </div> : <div>
        <ProfileComponent resetFriend={resetFriend} userID={friendUserID} username={friendUsername} userType='friend' />
        </div>}
      </div>
      <WaldFooter cssname='createPost'/>
    </div>
  );
}
