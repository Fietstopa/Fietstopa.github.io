// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   get,
//   child,
// } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9blJD_wVIXe-MqOaQllw3t-wQN7P-KFQ",
//   authDomain: "chci-makat.firebaseapp.com",
//   projectId: "chci-makat",
//   storageBucket: "chci-makat.appspot.com",
//   messagingSenderId: "946372830734",
//   appId: "1:946372830734:web:b8e7afe38c8b5f78163e5f",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getDatabse(app);
// document.getElementById("submit").addEventListener("click", function (e) {
//   e.preventDefault();
//   set(ref(db, "user/", +document.getElementById("name").value), {
//     username: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     poznamka: document.getElementById("poznamka").value,
//   });
//   alert("succeful");
// });
