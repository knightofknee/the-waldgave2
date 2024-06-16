import { useEffect, useState } from 'react';
import WaldHeader from '../components/WaldHeader';
import WaldFooter from '../components/WaldFooter';
import ProfileComponent from '../components/ProfileComponent';

export default function Friends() {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const result = true //aws firebase call, todo. submit friend name

    if (!result) {
      alert('Failed to add friend'); // todo error message box instead
      return;
    }
    setFriends([...friends, name]);
    setName('');

    alert('Friend added! 🎉');
    // todo success message
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
      <div>
        <h2>Add a Friend</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <button type="submit">Add Friend</button>
        </form>
      </div>
      {!friendUserID ? <div>
        <h2>My Friends</h2>
        <ul>
          {friends.map((friend, index) => (
            <li key={index} onClick={handleFriendClick} id={friend.id}>{friend.name}</li>
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
