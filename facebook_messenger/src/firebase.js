// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyB5n5lXtVZEdhZynV9_tlw-rKpJj6p6xvA",
//     authDomain: "fbmessenger-3b50d.firebaseapp.com",
//     projectId: "fbmessenger-3b50d",
//     storageBucket: "fbmessenger-3b50d.appspot.com",
//     messagingSenderId: "452746112871",
//     appId: "1:452746112871:web:7d8b9db5212e1e3ea649c2",
//     measurementId: "G-DTCF6LKF45"
//   };

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5n5lXtVZEdhZynV9_tlw-rKpJj6p6xvA",
    authDomain: "fbmessenger-3b50d.firebaseapp.com",
    projectId: "fbmessenger-3b50d",
    storageBucket: "fbmessenger-3b50d.appspot.com",
    messagingSenderId: "452746112871",
    appId: "1:452746112871:web:7d8b9db5212e1e3ea649c2",
    measurementId: "G-DTCF6LKF45"
})


const db = firebaseApp.firestore();
export default db;