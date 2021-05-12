import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBEcl4_BkCSMAI37fY-wuShNMh0fiKadSE",
    authDomain: "recipe-86f47.firebaseapp.com",
    projectId: "recipe-86f47",
    storageBucket: "recipe-86f47.appspot.com",
    messagingSenderId: "677689037490",
    appId: "1:677689037490:web:603d8ec07eb8738afd6fab",
    measurementId: "G-TRFXT3PXJB"
};

const fireBase = firebase.initializeApp(firebaseConfig)
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { fireBase, googleProvider, facebookProvider }