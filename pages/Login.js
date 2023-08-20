import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

submitLogin = () => {

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export default function Login () {
  return (<div>
    <label for="email">Email</label>
    <input id="email" type="email"></input>
    <label for="password">Password</label>
    <input id="password" type="password"></input>
    </div>)
}
{/* <form onSubmit={submitLogin}>
      <label for="name">Name</label>
      <input id="name" type="text"></input>
      <label for="link">Link</label>
      <input id="link"></input>
      <label for="description">Description</label>
      <textarea name="description" rows={7} cols={7}></textarea>
    </form> */}
