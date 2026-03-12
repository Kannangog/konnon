import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6gzq1zGgu1anB_XNA1knASAFC8yeklp0",
  authDomain: "konnon-e61f2.firebaseapp.com",
  projectId: "konnon-e61f2",
  storageBucket: "konnon-e61f2.firebasestorage.app",
  messagingSenderId: "71907199519",
  appId: "1:71907199519:web:8f8cb47d6a87bbefb6e32a",
  measurementId: "G-E86SZCZHWL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
