// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb9xyyh7NYLthAGKkGdTYbFUSqDQZlvGQ",
  authDomain: "netflixgpt-49518.firebaseapp.com",
  projectId: "netflixgpt-49518",
  storageBucket: "netflixgpt-49518.firebasestorage.app",
  messagingSenderId: "168132698228",
  appId: "1:168132698228:web:9aaeae788c23b321783121",
  measurementId: "G-YKESX5Q989",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
// eslint-disable-next-line
export const auth = getAuth();
