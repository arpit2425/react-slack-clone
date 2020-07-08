import firebase from 'firebase';
import "firebase/auth";
import "firebase/storage"
import 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDOEZpWBRG_85OyRnuOs3UMG6eBFP3oqMI",
  authDomain: "react-slack-e8c74.firebaseapp.com",
  databaseURL: "https://react-slack-e8c74.firebaseio.com",
  projectId: "react-slack-e8c74",
  storageBucket: "react-slack-e8c74.appspot.com",
  messagingSenderId: "1033525971088",
  appId: "1:1033525971088:web:f2abfe2e672927bf547015",
  measurementId: "G-M8FPY6V5S6"
};
firebase.initializeApp(firebaseConfig);
export default firebase;