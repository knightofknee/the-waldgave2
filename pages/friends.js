import { useEffect, useState } from 'react';
import WaldHeader from '../components/WaldHeader';
import WaldFooter from '../components/WaldFooter';

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

  useEffect(() => {
    const friends = [] //aws firebase call, todo
    // if (friends) {
    //   setFriends(JSON.parse(friends));
    // }
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
      <div>
        <h2>My Friends</h2>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      </div>
      </div>
      <WaldFooter />
    </div>
  );
}
