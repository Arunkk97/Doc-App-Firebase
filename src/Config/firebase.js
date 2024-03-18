import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCnvd2XjkWyorKvSSXCla9x83eFPzMUkkM",
  authDomain: "docs-web-9d9c9.firebaseapp.com",
  projectId: "docs-web-9d9c9",
  storageBucket: "docs-web-9d9c9.appspot.com",
  messagingSenderId: "195467947194",
  appId: "1:195467947194:web:87be80b7f41ee5c0b16683",
  measurementId: "G-DYN6LXPC20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
