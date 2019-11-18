import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHMibzh3HVAnvOYLOrXaDG1A3f2aPCVcQ",
  authDomain: "crwn-db-faf73.firebaseapp.com",
  databaseURL: "https://crwn-db-faf73.firebaseio.com",
  projectId: "crwn-db-faf73",
  storageBucket: "crwn-db-faf73.appspot.com",
  messagingSenderId: "798153818324",
  appId: "1:798153818324:web:a452cbe5744799be55fb41",
  measurementId: "G-0DFKKPQ3ZP"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
