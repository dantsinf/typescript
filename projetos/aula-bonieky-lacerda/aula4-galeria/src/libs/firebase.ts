import { initializeApp } from 'firebase/app';

import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEl4oZVwU2wjIh0rxDVsZ7_ZGZ6iWdgqs",
  authDomain: "d5react.firebaseapp.com",
  projectId: "d5react",
  storageBucket: "d5react.appspot.com",
  messagingSenderId: "287585518136",
  appId: "1:287585518136:web:8d3f8597cbaa6721245ccd",
  measurementId: "G-ZKL2EFLPBZ"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
