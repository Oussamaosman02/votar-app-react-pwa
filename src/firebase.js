// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiKTPhRHlMJaQRQpiSfW5soCzTh0rsFUU",
  authDomain: "app-vota-a.firebaseapp.com",
  projectId: "app-vota-a",
  storageBucket: "app-vota-a.appspot.com",
  messagingSenderId: "774068877681",
  appId: "1:774068877681:web:a4f2645b2aefe56eee9ed0",
  measurementId: "G-D1N620YEL7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function registrarUsuario(email,password) {
  createUserWithEmailAndPassword(getAuth(app),email,password)
  .then(credencialesUsuario=>{

  })
}
const auth = getAuth()
export async function inicioSesionUsuario(email, password) {
  try{
  let credenciales =  await signInWithEmailAndPassword(auth, email, password)
  } catch (e){
    return false;
  }
  return true;
}