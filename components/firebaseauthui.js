import React, { useEffect } from 'react';
import { auth } from './firebaseConfig'; // Adjust the path as necessary
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const FirebaseAuthUI = () => {
  useEffect(() => {
    // Lazy-load the FirebaseUI Auth widget.
    // FirebaseUI doesn't support JS module imports yet, so we rely on the global `firebaseui` object.
    const uiConfig = {
      signInSuccessUrl: '/', // Specify the URL you want to redirect to after a successful sign-in.
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // Add other providers you want to support
      ],
      // Other config options...
    };

    // Initialize the FirebaseUI widget using the Firebase Auth instance.
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return <div id="firebaseui-auth-container"></div>;
};

export default FirebaseAuthUI;
