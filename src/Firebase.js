import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJ1rUdeQHmrWE3Vabbqh_VuGssGLh97xo",
  authDomain: "clone-yt-d981e.firebaseapp.com",
  projectId: "clone-yt-d981e",
  storageBucket: "clone-yt-d981e.appspot.com",
  messagingSenderId: "41472808840",
  appId: "1:41472808840:web:a2d77398d188f2abdbcc3d",
  measurementId: "G-X6GDDL15JM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
