import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyArDixHY3vhRaD1mLl5OlZ3WFd8ZdLi9jU",
  authDomain: "nextchat-f3807.firebaseapp.com",
  projectId: "nextchat-f3807",
  storageBucket: "nextchat-f3807.appspot.com",
  messagingSenderId: "66460463004",
  appId: "1:66460463004:web:394cc2185e4a8166452259",
  measurementId: "G-7ZSBGJF1PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }