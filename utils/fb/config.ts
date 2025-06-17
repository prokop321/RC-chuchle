// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8EZ2DZUo0SkwyK7I-4wsAke4_MrmFaRQ",
  authDomain: "sokol-chuchle.firebaseapp.com",
  projectId: "sokol-chuchle",
  storageBucket: "sokol-chuchle.appspot.com",
  messagingSenderId: "987038881553",
  appId: "1:987038881553:web:3f4eedafb68ec80b8bdeb0",
  measurementId: "G-NB8QXF8R6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics: Analytics;
let db: Firestore;
let auth: Auth;

try {
  analytics = getAnalytics(app);
  db = getFirestore(app);
  auth = getAuth(app);
} catch {
  console.error("Error connecting to Firebase backend");
}

export { analytics, db, auth };
