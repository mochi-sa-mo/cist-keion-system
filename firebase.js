// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyC7gyfUNXd-nScjaztNG7Mfg9rVeqkLhd4",
  authDomain: "cist-keion-system.firebaseapp.com",
  projectId: "cist-keion-system",
  storageBucket: "cist-keion-system.firebasestorage.app",
  messagingSenderId: "430841800262",
  appId: "1:430841800262:web:01b325c0ae689d4c6b0c47"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
