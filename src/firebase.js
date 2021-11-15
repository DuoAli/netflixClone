import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBS683TYHAzTHWZHoEiyIQpM3dVjdTPqq8",
  authDomain: "muhammadalinetflix-b773e.firebaseapp.com",
  projectId: "muhammadalinetflix-b773e",
  storageBucket: "muhammadalinetflix-b773e.appspot.com",
  messagingSenderId: "785295257205",
  appId: "1:785295257205:web:7f5d9e9f5d9ed53e1a123c",
  measurementId: "G-KWZ2L6XBNB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
