
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {collection, getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBjrpwWUJwWZQINFM4tdxQ4u-vAzqisSow",
  authDomain: "patrick-is-fat.firebaseapp.com",
  projectId: "patrick-is-fat",
  storageBucket: "patrick-is-fat.appspot.com",
  messagingSenderId: "662681240760",
  appId: "1:662681240760:web:e74bbaeb817a997dd9a04d"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const todo = collection(firestore, "todo");

export { auth, todo};