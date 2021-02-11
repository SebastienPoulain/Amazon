import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJ01lNzx97qBz1p6FcyxvA0TD8QXHJgFE",
  authDomain: "fir-dbd47.firebaseapp.com",
  projectId: "fir-dbd47",
  storageBucket: "fir-dbd47.appspot.com",
  messagingSenderId: "33134669723",
  appId: "1:33134669723:web:014065115d4b946a9cbb3e",
};

const firebaseInit = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseInit.firestore();

export { db, auth };
