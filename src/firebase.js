// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC_6foTYHfkDpQuHUFVFClqx15tfyKvck",
  authDomain: "twitter-clone-1f286.firebaseapp.com",
  projectId: "twitter-clone-1f286",
  storageBucket: "twitter-clone-1f286.appspot.com",
  messagingSenderId: "770490766529",
  appId: "1:770490766529:web:53eb5cc9eec16a7b677040",
  measurementId: "G-GVHH8L7LJS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();