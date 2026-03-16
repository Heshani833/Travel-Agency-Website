// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq_o_-TN1INvpSVIXb05VR6teUC721Tgo",
  authDomain: "travel-agency-f2955.firebaseapp.com",
  projectId: "travel-agency-f2955",
  storageBucket: "travel-agency-f2955.firebasestorage.app",
  messagingSenderId: "9489606938",
  appId: "1:9489606938:web:66b7834f7d3bc1fe68e4a3",
  measurementId: "G-Q2566ENYVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };