// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB13W7i0KWYPeA5aGpGKfidwcQ0BjpKoYg",
  authDomain: "react-notes-f5a51.firebaseapp.com",
  projectId: "react-notes-f5a51",
  storageBucket: "react-notes-f5a51.appspot.com",
  messagingSenderId: "588007795831",
  appId: "1:588007795831:web:14f3328037e3aaf20bea72",
  measurementId: "G-MCGB5T96SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")