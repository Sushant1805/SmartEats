// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT69wmPHm9tZ3xBWhpvAVO5hRJsQ-WSC0",
  authDomain: "smarteats-bc8c9.firebaseapp.com",
  projectId: "smarteats-bc8c9",
  storageBucket: "smarteats-bc8c9.appspot.com",
  messagingSenderId: "915448268413",
  appId: "1:915448268413:web:569c30db72dbd90b739314",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("sign-up-submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("sign-up-email").value;
  const password = document.getElementById("sign-up-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account created successfully!");
      // You can also redirect the user to another page or perform other actions here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
      // You can also handle specific error codes here
    });
});
