import { useEffect, useState } from 'react';
import WaldHeader from '../components/WaldHeader';
import WaldFooter from '../components/WaldFooter';
import ProfileComponent from '../components/ProfileComponent';
import { auth, db } from '../firebase';
import { doc, setDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { set } from 'firebase/database';

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
    const friendRef = doc(db, 'Friends', userUid);

    try {

      const friendToBeAddedRef = doc(db, 'Friends', name);
      const friendToBeAddedSnap = await getDoc(friendToBeAddedRef);

      if (!friendToBeAddedSnap.exists()) {
        setErrorMessage2('Friend not found');
        return;
  }



      await setDoc(friendRef, { friends: arrayUnion(name) }, { merge: true }); // Create or update the document

      setFriends([...friends, name]);
      setName('');

      alert('Friend added! 🎉');
    } catch (error) {
      console.error("Error adding friend: ", error);
      alert('Failed to add friend');
    }
  };

  const [friendUserID, setFriendUserID] = useState(null);

  const handleFriendClick = (event) => {
    setFriendUserID(event.target.id);
  }

  useEffect(() => {
    const friends = [] //aws firebase call, todo
    // if (friends) {
    //   setFriends(JSON.parse(friends));
    // }
    setFriendUserID("");
  }, []);

  return (
    <div>
      <WaldHeader page='friends' />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Friends</h1>
      <span>{username}</span>
      {username && (
      <form onSubmit={handleNewNameSubmit}>
        <input
          type="text"
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
          required
        />
        <button type="submit">Add Username</button>
      </form>
    )}
    {errorMessage && <p>{errorMessage}</p>}
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
            <li key={index} onClick={handleFriendClick} id={friend}>{friend}</li>
          ))}
          {friends.length === 0 && <li onClick={handleFriendClick} id='weee' >Carl</li>}
        </ul>
      </div> : <div>
        <ProfileComponent user={friendUserID} />
        </div>}
      </div>
      <WaldFooter />
    </div>
  );
}
