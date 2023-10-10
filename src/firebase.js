// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFvdFcLmIoM3pVobI_4982Fob2g7b9MFQ",
  authDomain: "manila-teachers-3dbe5.firebaseapp.com",
  projectId: "manila-teachers-3dbe5",
  storageBucket: "manila-teachers-3dbe5.appspot.com",
  messagingSenderId: "596774965103",
  appId: "1:596774965103:web:c46e108a9b1ecf6ef6229a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

