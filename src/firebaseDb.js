import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCrQBhCP22386s7LDzwBKlPsOxNc92d0Q0",
  authDomain: "crud-nestor.firebaseapp.com",
  databaseURL: "https://crud-nestor.firebaseio.com",
  projectId: "crud-nestor",
  storageBucket: "crud-nestor.appspot.com",
  messagingSenderId: "169476001780",
  appId: "1:169476001780:web:519a6fbd0491c61ac4b3a1"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
