import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/firebase-firestore";
import "firebase/firebase-database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_WEB,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
firebase.initializeApp(firebaseConfig);
export const futsalFirestore = firebase.firestore().collection("futsal-team");
export const storage = firebase.storage().ref();
export const firestore = firebase.firestore();
export const database = firebase.database();
