import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDn_4UnZu0tK2ZRgSSdP827jJkf2QHm8x0",
  authDomain: "hack-dc914.firebaseapp.com",
  projectId: "hack-dc914",
  storageBucket: "hack-dc914.appspot.com",
  messagingSenderId: "1049672004301",
  appId: "1:1049672004301:web:35e0180e991a11c1c6ef84",
  measurementId: "G-Z2896R0CE1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  {
    app,
    analytics
}