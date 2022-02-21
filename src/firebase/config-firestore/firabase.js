// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG3oukdrGWNB0vTQidMFrLLSK0Q41S9x8",
    authDomain: "trainingapp-ba833.firebaseapp.com",
    projectId: "trainingapp-ba833",
    storageBucket: "trainingapp-ba833.appspot.com",
    messagingSenderId: "123256355091",
    appId: "1:123256355091:web:982f103dcea378414842e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)

export default app;