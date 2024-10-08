// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3bQo6kWMO4NIeQwni3HKGOvCbArjPwwA",
  authDomain: "visualwordbook-20b08.firebaseapp.com",
  projectId: "visualwordbook-20b08",
  storageBucket: "visualwordbook-20b08.appspot.com",
  messagingSenderId: "390523339201",
  appId: "1:390523339201:web:bdcb40b54900b1cd062f40",
  measurementId: "G-L28KHNBBB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Googleログイン用関数
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// ログアウト用関数
export const logOut = () => {
  return signOut(auth);
};

export { db, auth };