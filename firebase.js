import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey:"AIzaSyAAjRQBfnXe5CI9uoVW_JBwAmhi91WFHv0",
  authDomain:"pearlvera-store-d8d67.firebaseapp.com",

projectId:"pearlvera-store-d8d67",

storageBucket:"pearlvera-store-d8d67.firebasestorage.app",

messagingSenderId: "294579863559",

appId:"1:294579863559:web:afb7820ae856874707eaa2" 
};


initializeApp(firebaseConfig);

console.log("Firebase Connected");