// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKhG67qhZFcO-IzjmqezwkbIDbNwcfT7E",
    authDomain: "clone-3a54e.firebaseapp.com",
    projectId: "clone-3a54e",
    storageBucket: "clone-3a54e.appspot.com",
    messagingSenderId: "298960562898",
    appId: "1:298960562898:web:fd91dde3de7409ebdedb0b",
    measurementId: "G-95TD6HHL7F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };