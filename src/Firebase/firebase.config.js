// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaftlh2VJNgeZ9ep77bjRmcz0VKCzRgyg",
  authDomain: "online-task-management-60ac1.firebaseapp.com",
  projectId: "online-task-management-60ac1",
  storageBucket: "online-task-management-60ac1.appspot.com",
  messagingSenderId: "582813808363",
  appId: "1:582813808363:web:6ca92c246912d2e13cb0ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app