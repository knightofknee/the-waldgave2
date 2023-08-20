import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
