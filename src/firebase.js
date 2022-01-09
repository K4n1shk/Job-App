import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAI8q9FKvDzxyzvTh3AqWE6QpavmDPzqRc",
  authDomain: "linkedin-clone-eb777.firebaseapp.com",
  projectId: "linkedin-clone-eb777",
  storageBucket: "linkedin-clone-eb777.appspot.com",
  messagingSenderId: "474656120404",
  appId: "1:474656120404:web:b323891df2dae7b4c3d7c1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
