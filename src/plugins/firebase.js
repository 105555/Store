
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk-Q7ztYQxnZaUcxQdkdMjZ1pniaoRAwI",
  authDomain: "vueshop-ccc6e.firebaseapp.com",
  projectId: "vueshop-ccc6e",
  storageBucket: "vueshop-ccc6e.appspot.com",
  messagingSenderId: "267738395538",
  appId: "1:267738395538:web:b2521e2a83c0459673874b",
  measurementId: "G-Z9CWM23SV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { app , analytics , auth , db};

  
