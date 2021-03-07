import firebase from 'firebase';

var methodistghcms = firebase.initializeApp({
 
    apiKey: "AIzaSyBys5CEI3h88tPTXx72g1G0d6k_RlxKDN8",
    authDomain: "methodistgh-cms-2b4af.firebaseapp.com",
    projectId: "methodistgh-cms-2b4af",
    storageBucket: "methodistgh-cms-2b4af.appspot.com",
    messagingSenderId: "338884926169",
    appId: "1:338884926169:web:11560baef880354cc23cc8"

});

var db = methodistghcms.firestore();

export { db };