import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage';
// import ServiceAccount from './casino-project-a6f43-firebase-adminsdk-cy7q2-0289a3257a.json';

const app = firebase.initializeApp({
    // apiKey: "AIzaSyC4O6e1WicpmQhLR0-OQnPg16XqJWoVdlo",
    // authDomain: "casino-project-a6f43.firebaseapp.com",
    // databaseURL: "https://casino-project-a6f43-default-rtdb.firebaseio.com",
    // projectId: "casino-project-a6f43",
    // storageBucket: "casino-project-a6f43.appspot.com",
    // messagingSenderId: "657138415624",
    // appId: "1:657138415624:web:c37adba7c296f95add39bd",
    // measurementId: "G-FLELLL0ZRL"
    apiKey: "AIzaSyAPSbgsyE26iGdP0KtpIiDFQ0ELHJ7P36k",
    authDomain: "casino-project-8d852.firebaseapp.com",
    projectId: "casino-project-8d852",
    storageBucket: "casino-project-8d852.appspot.com",
    messagingSenderId: "639463363602",
    appId: "1:639463363602:web:30e05fb86157542ed6b4cb",
    measurementId: "G-H0W0H2W9QG"
    
})

export const auth = app.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
// export default app;