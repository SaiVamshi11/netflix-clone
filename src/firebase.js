import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQO3M4Wjvg-RvX6LZkKvTOlzy-i9N3P0s",
  authDomain: "netflix-clone-f7d74.firebaseapp.com",
  projectId: "netflix-clone-f7d74",
  storageBucket: "netflix-clone-f7d74.appspot.com",
  messagingSenderId: "871130394449",
  appId: "1:871130394449:web:fcb2f0d114708e6c246d70"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth}
export default db;