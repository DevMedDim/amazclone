// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPRCk96mcPnqJ-ZfbTDa8utcEVzKJeJ2g",
    authDomain: "amaclone-d2e52.firebaseapp.com",
    projectId: "amaclone-d2e52",
    storageBucket: "amaclone-d2e52.appspot.com",
    messagingSenderId: "291657402583",
    appId: "1:291657402583:web:d2e0e3a71f9496b396c892",
    measurementId: "G-0E26BLTLE1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db,auth};