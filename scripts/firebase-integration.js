import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiQR05cNYW3O_SmE9ZebtUlWeZAd3aH0I",
  authDomain: "auth-test-2d7d3.firebaseapp.com",
  projectId: "auth-test-2d7d3",
  storageBucket: "auth-test-2d7d3.appspot.com",
  messagingSenderId: "808367172044",
  appId: "1:808367172044:web:4293001f99b4805d0bd569",
  measurementId: "G-T4MBWYV6JY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => ({
      loggedIn: true,
      userCredential: userCredential
    }))
    .catch((error) => ({
      loggedIn: false,
      error: error.message
    }));
}

export async function popupLogin() {
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log(result);
      return true;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(error);
      return false;
      // ...
    });
}