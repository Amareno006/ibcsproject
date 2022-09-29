
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHYoAzXf7vXXe8Rs_x4Kz4WE2uIqzNKng",
    authDomain: "csa-login-project.firebaseapp.com",
    projectId: "csa-login-project",
    storageBucket: "csa-login-project.appspot.com",
    messagingSenderId: "903585205749",
    appId: "1:903585205749:web:4af9bb401afadd19eba4bc"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const todo = collection(firestore, "todo");

export { auth, todo };
