import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBmWCaoG9he47dYCL_DNqkoLMdCvrzUXsc",
  authDomain: "react-authentication-dcbec.firebaseapp.com",
  projectId: "react-authentication-dcbec",
  storageBucket: "react-authentication-dcbec.appspot.com",
  messagingSenderId: "376282082027",
  appId: "1:376282082027:web:75a9dea4b5a123a9a76cae",
  measurementId: "G-LW3V3SZ7B0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth };
