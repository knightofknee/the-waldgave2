import React, { useEffect } from 'react';
import { auth } from '../firebase'; // Adjust the path as necessary
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const FirebaseAuthUI = () => {
  useEffect(() => {
    // Lazy-load the FirebaseUI Auth widget.
    // FirebaseUI doesn't support JS module imports yet, so we rely on the global `firebaseui` object.
    if (typeof window !== 'undefined') {
    const uiConfig = {
      signInSuccessUrl: '/Login', // Specify the URL you want to redirect to after a successful sign-in.
      signInOptions: [
        'email',
        'google.com',
        'phone'
        // Add other providers you want to support
      ],
      // Other config options...
    };

    // Initialize the FirebaseUI widget using the Firebase Auth instance.
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', uiConfig);
  }
  },

  // {signInOptions: [
  //   {
  //     provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
  //     forceSameDevice: false,
  //   },
  //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
  // ]}
  []);

  return <div id="firebaseui-auth-container"></div>;
};

export default FirebaseAuthUI;
