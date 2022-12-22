import firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDsVW6IYqiuv5_wYqt7g0D4YnDXdwkeffo",
  authDomain: "snapfood-c9ac6.firebaseapp.com",
  projectId: "snapfood-c9ac6",
  storageBucket: "snapfood-c9ac6.appspot.com",
  messagingSenderId: "1061298752937",
  appId: "1:1061298752937:web:1c18b0ad181906049548b8",
  measurementId: "G-82DCJL3GF3",
};

var firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
const storage = firebase.storage();
export { db, storage, firebaseApp as default };

