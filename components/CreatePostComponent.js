import { useState } from 'react';
import { auth, db } from '../firebase.js'
import { collection, addDoc } from 'firebase/firestore';

export default function CreatePostComponent() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Title:', title);
    console.log('Content:', content);

    // todo limit posts based on account age and post count

    const user = auth.currentUser;

    const newPost = {
      content: content,
      author: user.uid, // or user.email
      timestamp: Date.now(),
      title: title
    };
    try {
      const docRef = await addDoc(collection(db, "Posts"), newPost);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Create Post</h1>
      <p>You have used X of Y posts, you get another each week you are on the platform. This accomplishes a few things, it's equal opportunity social media. It is an effort to make social media useful without being addictive. Your posts are limited, your feed has an end. Please help this information tree bloom so that your best ideas can spread organically.</p>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={{marginBottom: '10px'}}/>
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required style={{marginBottom: '10px'}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
