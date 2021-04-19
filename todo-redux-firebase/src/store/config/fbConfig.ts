import firebase from 'firebase/app'
import 'firebase/firestore'         //Database
import 'firebase/auth'              //Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize firebase
var config = {
    apiKey: "AIzaSyASB6Wz7DWNLOsrUtq7IF4UgZnrUjkY5PI",
    authDomain: "redux-firebase-5ea87.firebaseapp.com",
    projectId: "redux-firebase-5ea87",
    storageBucket: "redux-firebase-5ea87.appspot.com",
    messagingSenderId: "845086925548",
    appId: "1:845086925548:web:16e5139e934f65db17fbc9",
    measurementId: "G-F1XQ6HTLS4"
};

const settings = {
    timestampsInSnapshots: true
}

firebase.initializeApp(config);
firebase.firestore();

export default firebase;