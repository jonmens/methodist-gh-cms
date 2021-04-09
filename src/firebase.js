import firebase from 'firebase';

var methodistghcms = firebase.initializeApp({
 
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""

});

var db = methodistghcms.firestore();

export { db };
