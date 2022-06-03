import firebase from 'firebase/app'


const config ={
    apiKey: "AIzaSyCGH6lzYxuMfS3gGR4NdLboVf4wHlcOcsc",
    authDomain: "chat-web-app-c61fe.firebaseapp.com",
    databaseURL: "https://chat-web-app-c61fe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-web-app-c61fe",
    storageBucket: "chat-web-app-c61fe.appspot.com",
    messagingSenderId: "808919886710",
    appId: "1:808919886710:web:234f879579e38b92f92857"
  };

 const app = firebase.initializeApp(config)