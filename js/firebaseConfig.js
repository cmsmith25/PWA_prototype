import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getMessaging,
  onMessage,
  getToken
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js";

const firebaseConfig = {
    apiKey: "AIzaSyBulQh1WO6uPgVh7VEsoyxJxCY7CbzEd_M",
    authDomain: "comiclibrary-897a3.firebaseapp.com",
    projectId: "comiclibrary-897a3",
    storageBucket: "comiclibrary-897a3.firebasestorage.app",
    messagingSenderId: "522379735254",
    appId: "1:522379735254:web:c153862dbdc543ba621977",
    measurementId: "G-BW1N3Z1MBK"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { db, auth, messaging, getToken };