import { useState } from 'react';
import { auth, db } from '../firebase.js'
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { getDocs, query, where, orderBy } from 'firebase/firestore';

export default function CreatePostComponent() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const router = useRouter();

  function formatTimeUntilNextPost(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hour = date.getHours();
    let timeOfDay;
    if (hour < 6) {
      timeOfDay = 'night';
    } else if (hour < 12) {
      timeOfDay = 'morning';
    } else if (hour < 18) {
      timeOfDay = 'afternoon';
    } else {
      timeOfDay = 'evening';
    }

    return `${dayOfWeek} ${timeOfDay}`;
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = auth.currentUser;
    const newPost = {
      content: content,
      author: user.uid,
      timestamp: Date.now(),
      title: title,
      link: link
    };
    try {

      const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const q = query(
      collection(db, 'Posts'),
      where('author', '==', user.uid),
      where('timestamp', '>=', oneWeekAgo),
      orderBy('timestamp', 'asc')
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 1) {
      const oldestPostTimestamp = querySnapshot.docs[0].data().timestamp;
      const timeUntilNextPost = new Date(oldestPostTimestamp + 7 * 24 * 60 * 60 * 1000);
      const formattedTimeUntilNextPost = formatTimeUntilNextPost(timeUntilNextPost);
      console.error('You have already submitted 2 post in the past week.');
      alert(`You have already submitted 2 post in the past week. You can post again ${formattedTimeUntilNextPost}.`);
      router.push('/profile');
      return;
    }

      const docRef = await addDoc(collection(db, "Posts"), newPost);
      console.log("Document written with ID: ", docRef.id);
      if (docRef.id) {
        router.push('/profile');
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Create Post</h1>
      <p>You are limited to 2 posts in the past week. This limit will be eased if you post less frequently.</p>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={{marginBottom: '10px'}}/>
        <input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} required style={{marginBottom: '10px'}}/>
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required style={{marginBottom: '10px'}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
