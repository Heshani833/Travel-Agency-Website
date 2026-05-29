
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq_o_-TN1INvpSVIXb05VR6teUC721Tgo",
  authDomain: "travel-agency-f2955.firebaseapp.com",
  projectId: "travel-agency-f2955",
  storageBucket: "travel-agency-f2955.firebasestorage.app",
  messagingSenderId: "9489606938",
  appId: "1:9489606938:web:66b7834f7d3bc1fe68e4a3",
  measurementId: "G-Q2566ENYVQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// EXPORT AUTH
export const auth = getAuth(app);

export default app;