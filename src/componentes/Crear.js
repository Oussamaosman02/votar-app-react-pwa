import React from "react";
import { useNavigate } from "react-router-dom";
import { crearDoc } from "../firebase";
import "./assets/crear.css"
import vlogo from "./assets/v.png";
import ulogo from "./assets/u.png";
import otelogo from "./assets/ote.png";

export default function Crear() {
  let nombreCol = "clientes";
  const navigate = useNavigate();

  const crea = async (e) => {
    e.preventDefault();
    let col = {};
    col.name = e.target[0].value;
    col.message = e.target[1].value;
    col.votes = 0;
    await crearDoc(nombreCol, col);
    navigate("/home", {replace:true});
    document.location.reload(true);
  };
  return (
    <div className="crear">
      <div>
      <div className="imagenses">
          <img className="vlogo" src={vlogo} alt="v del logo" />{" "}
          <img className="ologo" src={otelogo} alt="ote del logo" />
          <img className="ulogo" src={ulogo} alt="u del logo" />{" "}
        </div>
        <h2>Crear</h2>
        <form onSubmit={crea}>
          <p>Titulo</p>
          <input type="text" placeholder="Titulo" />
          <p>Contenido</p>
          <input className="texto" type="text" placeholder="Mensaje" />
          <button>Crear</button>
        </form>
      </div>
    </div>
  );
}
