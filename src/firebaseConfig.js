import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7aujEuIsY_lnzmAAHlZMiOd7MrldmWvM",
  authDomain: "siag-7e746.firebaseapp.com",
  databaseURL: "https://siag-7e746-default-rtdb.firebaseio.com",
  projectId: "siag-7e746",
  storageBucket: "siag-7e746.appspot.com",
  messagingSenderId: "415017424700",
  appId: "1:415017424700:web:6296e8901faf77ceb1b039",
  measurementId: "G-5Z2XSJT3L2"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);