import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";      
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";      
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const firebaseConfig = {
     apiKey: "AIzaSyCS7y8LT91DUWGBnqUMxmKQvx5P9j8kBnE",
     authDomain: "asup-web.firebaseapp.com",
     projectId: "asup-web",
     storageBucket: "asup-web.appspot.com",
     messagingSenderId: "887415144657",
     appId: "1:887415144657:web:ae57eb60e66e528a8545f0"
     };
   
     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     //const analytics = getAnalytics(app);
     const database = getDatabase(app);
     const auth = getAuth();
       