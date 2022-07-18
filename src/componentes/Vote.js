import React, { useEffect, useState } from "react";
import { buscar, votar } from "../firebase";
import "./assets/home.css";
import vlogo from "./assets/v.png";
import ulogo from "./assets/u.png";
import cora from "./assets/cora.png";
import bcora from "./assets/bcora.png";
import otelogo from "./assets/ote.png";
import { useNavigate } from "react-router-dom";

export function Vote() {
  const [clientes, setClientes] = useState([]);
  let nombreCol = "clientes";
  const navigate = useNavigate();

  const buscarCli = async () => {
    let clientes = await buscar(nombreCol);
    setClientes(clientes);
  };

  useEffect(() => {
    buscarCli();
  }, []);

  return (
    <div className="home">
      <div className="cont">
        <div className="imagenses">
          <img className="vlogo" src={vlogo} alt="v del logo" />{" "}
          <img className="ologo" src={otelogo} alt="ote del logo" />
          <img className="ulogo" src={ulogo} alt="u del logo" />{" "}
        </div>
        {clientes.map((c) => {
          return (
            <li key={c.id}>
              <span className="nam">{c.name}</span>
              <span className="men">{c.message}</span>
              <span className="vot">{c.votes}</span>
              <img
                src={cora}
                alt="corazon"
                className="masb"
                id={c.id}
                onClick={async () => {
                  let id = c.id;
                  let vot = c.votes + 1;
                  await votar(nombreCol, id, vot);
                  buscarCli();
                  let nodo = document.getElementById(c.id);
                  nodo.style.display = "none";

                  let nodo2 = document.getElementById(`${c.id}1`);
                  nodo2.style.display = "block";
                }}
              />
              <img
                src={bcora}
                alt="corazon roto"
                className="menosb"
                id={`${c.id}1`}
                onClick={async () => {
                  let id = c.id;
                  let vot = c.votes - 1;
                  await votar(nombreCol, id, vot);
                  buscarCli();
                  let nodo = document.getElementById(`${c.id}1`);
                  nodo.style.display = "none";
                  let nodo2 = document.getElementById(c.id);
                  nodo2.style.display = "block";
                }}
              />
            </li>
          );
        })}
        <button
          className="creare"
          onClick={() => {
            navigate("/crear", { replace: true });
          }}
        >
          Crear
        </button>
      </div>
    </div>
  );
}
