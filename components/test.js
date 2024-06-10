

const user = firebase.auth().currentUser;

const newPost = {

  content: "This is my new post!",

  author: user.uid, // or user.email

  timestamp: firebase.database.ServerValue.TIMESTAMP,

};


firebase.database().ref('Posts').push(newPost);

