import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

export default function Login () {

  const submitLogin = () => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        setUserPageLink(user.username) //
        logIn(true)
        alert("success!")
      })
      .catch((error) => {
        alert("wompwomp")
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error)
        // ..
      });
  }

  const submitEntry = () => {

    //firebase.submitEntry(name, link, description)
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, logIn] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const [userPageLink, setUserPageLink] = useState('');

  return (<div>
    {!isLoggedIn ? (<form onSubmit={submitLogin}>
    <label for="email">Email</label>
    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
    <label for="password">Password</label>
    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
    </form>
    ) : (
      <div>
        <h2>Welcome! This is barebones social media, where you can only see what your friends recommend. Old-timey internet with text and links only. Please post your favorite things, whatever they may be.</h2>
        <form onSubmit={submitEntry}>
          <label for="name">Name</label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
          <label for="link">Link</label>
          <input id="link" value={link} onChange={e => setLink(e.target.value)}></input>
          <label for="description">Description</label>
          <textarea name="description" rows={7} cols={7} value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </form>
        <div>
          <h3>
            Your Current List, re-order and edit below. <a href={`https://waldgrave.com/profile/${userPageLink}`}>Here is a link directly to your page</a>
          </h3>
        </div>
      </div>
    )}

    </div>)
}

