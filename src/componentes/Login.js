import React, { useState } from "react";
import { inicioSesionUsuario } from "../firebase";

export default function Login() {
  const [but, setBut] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    let sesionini = await inicioSesionUsuario(
      e.target[0].value,
      e.target[1].value
    );

    if (sesionini) {
      alert("inicio hecho");
      setBut(true);
      e.preventDefault();
    } else {
      e.preventDefault();
      alert("fallo");
    }
    e.preventDefault();
  };
  return (
    <div>
      <h2>Inicia Sesion</h2>
      <form
        onSubmit={(c) => {
          login(c);
        }}
      >
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button disabled={but}>Inciar sesion</button>
      </form>
    </div>
  );
}
