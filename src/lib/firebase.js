import firebase from "firebase/app";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyDMKreqHorN5fIAAV2GEIexSMTRRRDVY7g",
  authDomain: "fir-social-bd77e.firebaseapp.com",
  projectId: "fir-social-bd77e",
  storageBucket: "fir-social-bd77e.appspot.com",
  messagingSenderId: "152633995610",
  appId: "1:152633995610:web:d0494a5d89253505b18363",
  measurementId: "G-DYJZZMYLCS",
});

export { firebase };