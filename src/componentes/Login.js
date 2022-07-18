import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { inicioSesionUsuario } from "../firebase";
import "./assets/login.css";
import vlogo from "./assets/v.png";
import ulogo from "./assets/u.png";
import otelogo from "./assets/ote.png";

export default function Login() {
  const [but, setBut] = useState(false);
  const navigate = useNavigate();
let loged = true
  let l = localStorage;
  let clave = "sesion1"
  const login = async (e) => {
    e.preventDefault();
    let sesionini = await inicioSesionUsuario(
      e.target[0].value,
      e.target[1].value
    );

    if (sesionini) {
      setBut(true);
      l.setItem(clave,loged)
      e.preventDefault();
      navigate("/home", { replace: true });
    } else {
      e.preventDefault();
      l.setItem(clave,!loged)
      alert("fallo");
    }
    e.preventDefault();
  };
  return (
    <div className="login">
      <div>
        <div className="imagenses">
          <img className="vlogo" src={vlogo} alt="v del logo" />{" "}
          <img className="ologo" src={otelogo} alt="ote del logo" />
          <img className="ulogo" src={ulogo} alt="u del logo" />{" "}
        </div>
        <h2>Inicia Sesion</h2>
        <form
          onSubmit={(c) => {
            login(c);
          }}
        >
          <p>Email</p>
          <input type="text" placeholder="email" />
          <p>Contraseña</p>
          <input type="password" placeholder="password" />
          <button disabled={but}>Inciar sesion</button>
          <Link to="/registro">¿No tienes cuenta?Dale aquí</Link>
        </form>
      </div>
    </div>
  );
}
