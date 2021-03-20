import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBv9mFk_vvfITLrREOYh_pgl-W21Vpoczs",
  authDomain: "prog-veilletechno.firebaseapp.com",
  projectId: "prog-veilletechno",
  storageBucket: "prog-veilletechno.appspot.com",
  messagingSenderId: "411840747805",
  appId: "1:411840747805:web:40fa0b63ceb35698b8e9f4"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
