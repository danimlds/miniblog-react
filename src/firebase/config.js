
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCt7-IcZh0IrAHmSFqedYYHIu00er3z6TU",
  authDomain: "miniblog-7d667.firebaseapp.com",
  projectId: "miniblog-7d667",
  storageBucket: "miniblog-7d667.appspot.com",
  messagingSenderId: "836326166747",
  appId: "1:836326166747:web:393bd32f4346a2d8497cfe"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};