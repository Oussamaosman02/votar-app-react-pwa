import React, { useState } from "react";
import { registrarUsuario } from "./firebase";

export default function Registro() {
  const [but, setBut] = useState(false);
  function regsitar(e) {
    registrarUsuario(e.target[2].value, e.target[3].value);
    e.preventDefault()
    setBut(true);
    alert("Ahora inicia sesion")
  }
  return (
    <div>
      <h2>Registrate</h2>
      <form onSubmit={regsitar}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surename" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button disabled={but}>Registrar</button>
      </form>
    </div>
  );
}
