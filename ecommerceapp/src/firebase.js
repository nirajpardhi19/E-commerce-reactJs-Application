import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCy4wfppCYwk-szUp42Yhp1-kXeUjA1Wio",
  authDomain: "shopper-app-5e728.firebaseapp.com",
  projectId: "shopper-app-5e728",
  storageBucket: "shopper-app-5e728.appspot.com",
  messagingSenderId: "331660246036",
  appId: "1:331660246036:web:2ad212b0e6417dedc73b01"
};

// To connect to firebase Appn
const app = firebase.initializeApp(firebaseConfig)

// To connect to FireStore database
 export const myDatabse = firebase.firestore()

 // To connect Authentication with google

 export const auth = getAuth(app) //Auth --Authentication system 
 export const provider = new GoogleAuthProvider() //Provider --google Authentication
