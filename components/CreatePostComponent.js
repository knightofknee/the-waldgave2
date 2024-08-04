import { useState, useEffect } from 'react';
import { auth, db } from '../firebase.js'
import { useUser } from './UserContext';
import { useRouter } from 'next/router';
import { collection, addDoc, getDocs, query, where, orderBy, getDoc, doc } from 'firebase/firestore';

// todo link to a previous post

export default function CreatePostComponent({ ...props}) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [isCharLimitExceeded, setIsCharLimitExceeded] = useState(false);
  const router = useRouter();

  const updateContent = (newContent) => {
    const words = newContent.trim().split(/\s+/);
    const charCount = newContent.length;
    setWordCount(words.length);
    setContent(newContent);
    setIsCharLimitExceeded(charCount > 10000); // 2000 words * 5 characters per word
  };

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

  function adjustTextareaHeight(e) {
    const textarea = e.target;
    textarea.rows = 1;
    // Calculate the required rows based on scrollHeight. You might need to adjust the divisor (24 here) based on your line-height
    const requiredRows = Math.ceil(textarea.scrollHeight / 15);
    textarea.rows = requiredRows < 20 ? 20 : requiredRows;
  }

  const [username, setUsername] = useState(props.username ?? useUser().username)

  useEffect(() => {
    const uid = props.userID

    if (!uid) {
      router.push('/Login')
      return;
    }

    const fetchData2 = async () => {
      const profileDocRef = doc(db, 'Profiles', uid);
      const profileDocSnap = await getDoc(profileDocRef);

      if (profileDocSnap.exists()) {
        setUsername(profileDocSnap.data().username);
      }
    }
    fetchData2();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (wordCount > 1000) {
      alert('Character limit exceeded! Please limit your post to 1000 words.');
      return;
    }

    const user = auth.currentUser;
    const tags = content.match(/#\w+/g) || [];
    const slicedTags = tags.map(tag => tag.slice(0, 50));

    const newPost = {
      content: content,
      author: user.uid,
      timestamp: Date.now(),
      title: title,
      link: link,
      tags: slicedTags,
      authorName: username,
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
      <p style={{textAlign: 'center'}}>You are limited to 2 posts in the past week
        </p>
        <span style={{textAlign: 'center', fontSize: 'smaller', marginBottom: '10px'}}>(tag-based searching will be added later, use a hashtag to save any tags you want #inprogress)</span>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px'}} onSubmit={handleSubmit}>
        <input required type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{marginBottom: '10px'}}/>
        <input required type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} style={{marginBottom: '10px'}}/>
        <textarea required rows={20} cols={80} placeholder="Content" value={content} onChange={(e) => updateContent(e.target.value)} style={{marginBottom: '10px'}} onInput={adjustTextareaHeight}/>
        <div>{wordCount}/1000 {isCharLimitExceeded && <span style={{color: 'red'}}>Character limit exceeded!</span>}</div>
        <button type="submit">Submit</button>
      </form>

      <style jsx>{`
        textarea {
          max-width: 80%;
        }
          @media (max-width: 550px) {
            textarea {
              max-width: 55%;
            }
          }
      `}</style>
    </div>
  );
}
