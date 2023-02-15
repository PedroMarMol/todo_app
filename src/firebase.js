import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmbk-s3en28jRB3MrKDLG5-rD34HvQ5uE",
  authDomain: "todo-app-96664.firebaseapp.com",
  projectId: "todo-app-96664",
  storageBucket: "todo-app-96664.appspot.com",
  messagingSenderId: "948313630901",
  appId: "1:948313630901:web:18edd3c725be3b737636fc",
  measurementId: "G-HYY6XR984H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);