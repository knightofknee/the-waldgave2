import { useState, useEffect } from 'react';
import { doc, getDocs, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { collection, query, where } from 'firebase/firestore';
import { set } from 'firebase/database';
import { useUser } from './UserContext';

export default function AddNameComponent() {
  const [username, setUsername] = useState(useUser().username);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const q = query(collection(db, 'Profiles'), where('username', '==', username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      setError('Username is already taken');
    } else {
      await setDoc(doc(db, 'Profiles', auth.currentUser.uid), { username: username });
      setUsername('');
      setError('');
      setIsSubmitted(true);
      userUser().setUsername(username);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      if (auth.currentUser) {
        const docRef = doc(db, 'Profiles', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLoading(true);
        } else {
          setLoading(false);
        }
      };
    }

    fetchProfile();
  }, [auth.currentUser]);

  if (loading) {
    return null;
  }

  if (isSubmitted) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Username successfully added!</h2>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Add a username so your friends can find you</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
