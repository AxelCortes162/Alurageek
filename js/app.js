import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
        console.log(inputs);
    });   
})

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "loggin_completo.html"
});
 
// app.js


  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOQBXqSQK46mv8OHM2gxdgNhvJOMfXq8Q",
  authDomain: "alurageek-1589b.firebaseapp.com",
  projectId: "alurageek-1589b",
  storageBucket: "alurageek-1589b.appspot.com",
  messagingSenderId: "896721029931",
  appId: "1:896721029931:web:0e59aa500e7d1659d0936e",
  measurementId: "G-3N7JYL5GPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
