import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import {db} from '../firebase';
import { doc, arrayUnion, updateDoc, getDoc, setDoc } from "firebase/firestore";
import FeedComponent from '../components/FeedComponent'
import ProfileComponent from '../components/ProfileComponent'

import dynamic from 'next/dynamic';
// const FirebaseAuthUI = dynamic(() => import('../components/firebaseauthui'), { ssr: false });
//import FirebaseAuthUI from '../components/firebaseauthui'

export default function Login () {

  const [isClient, setIsClient] = useState(false);

  const submitSignup = (event) => {
    event.preventDefault();
    //const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        //localStorage.setItem("UserEmail", user.email)

        setUserPageLink(user.email.split("@")[0]) // they can update this later
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
  const submitLogin = (event) => {
    event.preventDefault()
    //const auth = getAuth();
    signInWithEmailAndPassword(auth, email2, password2)
      .then((userCredential) => {
        // Signed in

        // need to maintain session
        const user = userCredential.user;
        localStorage.setItem("UserEmail", user.email)
        setUserPageLink(user.email.split("@")[0])
        logIn(true)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const submitEntry = async (event) => {

    console.log("waa")
    event.preventDefault()

    // I need to verify their login here, since they could set their localStorage to another user's email

    //firebase.submitEntry(name, link, description)
    const userEmail = localStorage.getItem("UserEmail");
    const userProfileDocRef = doc(db, "profiles", userEmail);
    console.log("waarrrr")
    const entry = {
      title: "New Entry Titleeee",
      content: "Content of the new entry",
      link: "",
      createdAt: new Date()
    };
    // FirebaseError: Missing or insufficient permissions -- errored here
    const docSnap = await getDoc(userProfileDocRef);
  if (docSnap.exists()) {
    // Document exists, update it
    console.log("waf")
    await updateDoc(userProfileDocRef, { Anthology: arrayUnion(entry) });
  } else {
    console.log("wafu")

    // Document does not exist, create it with the entry in an Anthology array
    await setDoc(userProfileDocRef, { Anthology: [entry] }, { merge: true });
  }

// console.log("waaaaaa")
//     await updateDoc(userProfileDocRef, {
//       Anthology: arrayUnion(entry)
//     });
//     console.log("waaaaaa2")
    //await setDoc(doc(db, "profiles", localStorage.getItem("UserEmail")), entry)
  }

  const LogOut = (event) => {
    event.preventDefault()

    logIn(false)
  }

  // end of methods

  // onAuthStateChanged((authUser) => {
  //   if (authUser) {
  //     localStorage.setItem('authUser', JSON.stringify(authUser));
  //     // ...
  //   }
  // });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');
  const [isLoggedIn, logIn] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const [userPageLink, setUserPageLink] = useState('');

  useEffect(() => {
    setIsClient(true);
    var userEmail = localStorage.getItem("UserEmail") // this seems bad, follow up later. can a user pretend to be someone else by just knowing their email? should I encrypt this?
    console.log("eee", userEmail)
    if (userEmail) {
      logIn(true)
    }

  }, [])

    // start of styles

    const formDivs = {
      padding: "1em"
    }
    const labelStyle = {
      display: "block"
    }

    // end of styles

  return (<div>
    {!isLoggedIn ? (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div>newTest</div>
        {isClient && <FirebaseAuthUI />}
      <form onSubmit={submitLogin} style={formDivs}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email2} onChange={e => setEmail2(e.target.value)}></input>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password2} onChange={e => setPassword2(e.target.value)}></input>
      <button type="submit">Log in</button>
      </form>

    <form onSubmit={submitSignup} style={formDivs}>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
    <label htmlFor="password">Password</label>
    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
    <button type="submit">Sign up</button>
    </form>
    </div>
    ) : (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2>(in progress) Welcome! This is barebones social media, where you can only see what your friends recommend. Old-timey internet with text and links only. Please post your favorite things, whatever they may be. You are limited to 3 items at first, and you gain one more post each week you are on the platform. These do not expire, this is equal opportunity social media. The internet is a bit crowded, let's stop rewarding the people shouting all the time. (your posts are only visible to friends by default)</h2>
        <form onSubmit={submitEntry} style={{display: "flex", flexDirection:"column", textAlign: "center"}}>
          <div style={formDivs}>
          <label htmlFor="name" style={labelStyle}>Title of post</label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
          </div>
          <div style={formDivs}>
          <label htmlFor="link" style={labelStyle}>Link (optional)</label>
          <input id="link" value={link} onChange={e => setLink(e.target.value)}></input>
          </div>
          <div style={formDivs}>
          <label htmlFor="description" style={labelStyle}>Description</label>
          <textarea name="description" rows={10} cols={50} value={description} onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <div>
          <button type="submit">Submit Entry</button>
          </div>
        </form>
        <div>
          <h3>
            Your Current List, re-order and edit below. <a href={`https://waldgrave.com/profile/${userPageLink}`}>Here is a link directly to your page</a>
          </h3>
        </div>
        <div>
          <FeedComponent />
          <ProfileComponent />
        </div>
        <div>
        {/* {isClient && <FirebaseAuthUI />} */}
        <button type="button" onClick={LogOut}>Log out</button>
        </div>
      </div>
    )}

<style>

</style>
    </div>)
}

