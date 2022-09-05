import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdANIGVujILYkCaDFTNfCpBOnhHYoYuGo",
  authDomain: "twitter-clone-firebase-e1cfb.firebaseapp.com",
  projectId: "twitter-clone-firebase-e1cfb",
  storageBucket: "twitter-clone-firebase-e1cfb.appspot.com",
  messagingSenderId: "421558157961",
  appId: "1:421558157961:web:b357f9d2e99d67dc47fc58",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;