// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { uuidv4 } from '@firebase/util'
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
  measurementId: "G-D1N620YEL7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function registrarUsuario(email, password) {
  createUserWithEmailAndPassword(
    getAuth(app),
    email,
    password
  ).then((credencialesUsuario) => {});
}
const auth = getAuth();
export async function inicioSesionUsuario(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return false;
  }
  return true;
}

export async function buscar(coleccion) {
  let listado = [];
  let consulta = collection(getFirestore(), coleccion);
  let resultado = await getDocs(consulta);
  resultado.forEach((doc) => {
    let objeto = doc.data();
    objeto.id = doc.id;
    listado.push(objeto);
  });
  return listado;
}

export async function crearDoc(colecion,objeto){
  objeto.id = uuidv4();
  let documento =  doc(getFirestore(),colecion,objeto.id);
  await setDoc(documento,objeto);
}

export async function votar (colecion, id,votes)  {
  await updateDoc(doc(getFirestore(),colecion,id),{votes})
}