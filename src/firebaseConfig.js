import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCYOoii_GZ0CgyfnLITPFx0sbtcvBNvRpo",
  authDomain: "claystone-dashboard.firebaseapp.com",
  projectId: "claystone-dashboard",
  storageBucket: "claystone-dashboard.appspot.com",
  messagingSenderId: "23413251995",
  appId: "1:23413251995:web:79d5081d348952be400b3e",
  measurementId: "G-YGZ1S24KFZ"
};


const app = initializeApp(firebaseConfig);



const db = getFirestore(app);

export default db;