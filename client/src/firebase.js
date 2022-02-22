import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAEM4Lclj3SlNbOM3d3liwyJI0OZv4Fs0U',
  authDomain: 'registration-a847b.firebaseapp.com',
  projectId: 'registration-a847b',
  storageBucket: 'registration-a847b.appspot.com',
  messagingSenderId: '779200177802',
  appId: '1:779200177802:web:d185c54f686dc177846f73',
};


const app = initializeApp(firebaseConfig);