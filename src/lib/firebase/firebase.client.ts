import {
  PUBLIC_APIKEY,
  PUBLIC_AUTHDOMAIN,
  PUBLIC_PROJECTID,
  PUBLIC_STORAGEBUCKET,
  PUBLIC_MESSAGINGSENDERID,
  PUBLIC_APPID
} from "$env/static/public"

import { getApps, initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: PUBLIC_APIKEY,
  authDomain: PUBLIC_AUTHDOMAIN,
  projectId: PUBLIC_PROJECTID,
  storageBucket: PUBLIC_STORAGEBUCKET,
  messagingSenderId: PUBLIC_MESSAGINGSENDERID,
  appId: PUBLIC_APPID
};

// Initialize Firebase
let firebaseApp;
 
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}
 
// Auth
const firebaseAuth = getAuth(firebaseApp);
 
export { firebaseApp, firebaseAuth };