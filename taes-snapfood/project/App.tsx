import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts, Rancho_400Regular } from '@expo-google-fonts/rancho';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Provider } from "react-redux";
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { applyMiddleware, compose, createStore } from 'redux'
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore } from 'redux-firestore' // <- needed if using firestore
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

console.disableYellowBox = true;

export const firebaseConfig = {
  apiKey: "AIzaSyDsVW6IYqiuv5_wYqt7g0D4YnDXdwkeffo",
  authDomain: "snapfood-c9ac6.firebaseapp.com",
  projectId: "snapfood-c9ac6",
  storageBucket: "snapfood-c9ac6.appspot.com",
  messagingSenderId: "1061298752937",
  appId: "1:1061298752937:web:1c18b0ad181906049548b8",
  measurementId: "G-82DCJL3GF3"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
//firebase.initializeApp(firebaseConfig)
var firebaseApp;
if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
 }else {
    firebaseApp = firebase.app(); // if already initialized, use that one
}

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

const middlewares = [
  thunk.withExtraArgument({ getFirebase, getFirestore })
]

// Create store with reducers and initial state
const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
  )
)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({ Rancho_400Regular, Roboto_700Bold, Roboto_400Regular });

  if (!isLoadingComplete && !fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}