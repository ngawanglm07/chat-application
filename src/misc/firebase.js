import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database'


const config = {
  apiKey: "AIzaSyAlGjLBZOgbeRcGIWQGsZMT2PhBuKiOG7g",
  authDomain: "chat-web-app-6a9dc.firebaseapp.com",
  databaseURL: "https://chat-web-app-6a9dc-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-6a9dc",
  storageBucket: "chat-web-app-6a9dc.appspot.com",
  messagingSenderId: "355721514831",
  appId: "1:355721514831:web:252aaf7f6fd9b454afff3a",
  measurementId: "G-18SGX75ZQY"
};


const app = firebase.initializeApp(config);

export const auth = app.auth();
export const  database = app.database();



