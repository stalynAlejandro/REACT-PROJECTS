/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// Import necessary modules
import {AppRegistry} from 'react-native';
import App from './App'; // Your App component
import {name as appName} from './app.json';

// Register the app for the web platform
if (window.document) {
  const {AppRegistry} = require('react-native');
  const {appKey} = require('./app.json');
  AppRegistry.registerComponent(appKey, () => App);
  const rootTag = document.getElementById('app');
  AppRegistry.runApplication(appKey, {rootTag});
} else {
  AppRegistry.registerComponent(appName, () => App);
}
