import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCeFNiv4Qm7Gr9R8aNkilklVF5IoA2k83c',
  authDomain: 'todolist-c8668.firebaseapp.com',
  databaseURL: 'https://todolist-c8668.firebaseio.com',
  projectId: 'todolist-c8668',
  storageBucket: 'todolist-c8668.appspot.com',
  messagingSenderId: '53556967557',
  appId: '1:53556967557:web:e9a334273887e433a4d1ec',
});

export {firebaseConfig as firebase};
