import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUBdenMbMKMawV2LopPP8TgTA8ovlTMRY",
  authDomain: "yt-dd7a8.firebaseapp.com",
  projectId: "yt-dd7a8",
  storageBucket: "yt-dd7a8.appspot.com",
  messagingSenderId: "651283750627",
  appId: "1:651283750627:web:0576e4d0463d65a31a6fd6",
  measurementId: "G-74M50MWNG2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
