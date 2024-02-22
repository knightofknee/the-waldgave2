import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJm47UsoKasrg-XOVxswpRroq1_3Ghv5I",
  authDomain: "waldgrave-profiles.firebaseapp.com",
  projectId: "waldgrave-profiles",
  storageBucket: "waldgrave-profiles.appspot.com",
  messagingSenderId: "203808800578",
  appId: "1:203808800578:web:a80a477e2e3d5eae8dd2db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db}
//const analytics = getAnalytics(app);

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
