import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../firebase";
import "./assets/registro.css";
import vlogo from "./assets/v.png";
import ulogo from "./assets/u.png";
import otelogo from "./assets/ote.png";

export default function Registro() {
  const navigate = useNavigate();
  const [but, setBut] = useState(false);
  function regsitar(e) {
    registrarUsuario(e.target[2].value, e.target[3].value);
    e.preventDefault();
    setBut(true);
    alert("Ahora inicia sesion");
    navigate("/inicio", { replace: true });
  }
  return (
    <div className="registro">
      <div>
        {" "}
        <div className="imagenses">
          <img className="vlogo" src={vlogo} alt="v del logo" />{" "}
          <img className="ologo" src={otelogo} alt="ote del logo" />
          <img className="ulogo" src={ulogo} alt="u del logo" />{" "}
        </div>
        <h2>Registrate</h2>
        <form onSubmit={regsitar}>
          <p>Nombre</p>
          <input type="text" placeholder="Name" />
          <p>Apellidos</p>
          <input type="text" placeholder="Surname" />
          <p>Email</p>
          <input type="text" placeholder="Email" />
          <p>Contraseña</p>
          <input type="password" placeholder="Password" />
          <h6>Más de 6 caracteres!!!</h6>
          <button disabled={but}>Registrar</button>
        </form>
      </div>
    </div>
  );
}
