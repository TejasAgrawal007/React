// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAWNo5RfVOuWGmNJ8qc_W3Y5epqfYPfPdY",
//   authDomain: "todo-99db7.firebaseapp.com",
//   projectId: "todo-99db7",
//   storageBucket: "todo-99db7.appspot.com",
//   messagingSenderId: "831739600166",
//   appId: "1:831739600166:web:3a84e5c336f611f17b35e7",
//   measurementId: "G-YM4FPWWZFF"
// };

import firebase from "firebase";
import 'firebase/firestore'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWNo5RfVOuWGmNJ8qc_W3Y5epqfYPfPdY",
  authDomain: "todo-99db7.firebaseapp.com",
  projectId: "todo-99db7",
  storageBucket: "todo-99db7.appspot.com",
  messagingSenderId: "831739600166",
  appId: "1:831739600166:web:3a84e5c336f611f17b35e7",
  measurementId: "G-YM4FPWWZFF"
})


const db = firebaseApp.firestore();

export default db 