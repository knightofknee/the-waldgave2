import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

export default function Login () {

  const submitLogin = () => {
    console.log("woooooooooooooooo1")
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("woooooooooooooooo2")
        const user = userCredential.user;
        // ...

        setUserPageLink(user.username) //
        logIn(true)
        alert("success!")
      })
      .catch((error) => {
        console.log("woooooooooooooooo3")
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
    <label htmlFor="email">Email</label>
    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
    <label htmlFor="password">Password</label>
    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
    </form>
    ) : (
      <div>
        <h2>(in progress) Welcome! This is barebones social media, where you can only see what your friends recommend. Old-timey internet with text and links only. Please post your favorite things, whatever they may be.</h2>
        <form onSubmit={submitEntry}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
          <label htmlFor="link">Link</label>
          <input id="link" value={link} onChange={e => setLink(e.target.value)}></input>
          <label htmlFor="description">Description</label>
          <textarea name="description" rows={7} cols={7} value={description} onChange={e => setDescription(e.target.value)}></textarea>
          <button type="submit">Log in/Sign up</button>
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

