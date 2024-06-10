import { useState } from 'react';

export default function CreatePostComponent() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Title:', title);
    console.log('Content:', content);
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
