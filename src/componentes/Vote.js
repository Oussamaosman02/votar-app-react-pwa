import React, { useEffect, useState } from "react";
import { buscar, votar } from "../firebase";


export function Vote() {
  const [clientes, setClientes] = useState([]);
  const [mas, setMas] = useState(false);
  let nombreCol = "clientes";
 


  const buscarCli = async (cole) => {
    let clientes = await buscar(cole);
    setClientes(clientes);
  };
  
  useEffect(() => {
    buscarCli(nombreCol);
  }, []);

  return (
    <div>
      {clientes.map((c) => {
        return (
          <li key={c.id}>
            <span>Name : {c.name}</span>
            <span>Mensaje : {c.message}</span>
            <span>Votos : {c.votes}</span>
            <button id={c.id}
             onClick={ async() =>{
              let id = c.id;
              let vot = c.votes +1;
              await votar(nombreCol, id, vot);
              buscarCli(nombreCol)
              let nodo = document.getElementById(c.id);
              let a = document.createAttribute("disabled");
              a.value = "true";
              nodo.setAttributeNode(a);
            }}
            >
              +
            </button>
            <button id={`${c.id}1`} disabled={mas} 
            onClick={ async() =>{
              let id = c.id;
              let vot = c.votes -1;
              await votar(nombreCol, id, vot);
              buscarCli(nombreCol)
              let nodo = document.getElementById(`${c.id}1`);
              let a = document.createAttribute("disabled");
              a.value = "true";
              nodo.setAttributeNode(a);
            }}
            >
              -
            </button>
          </li>
        );
      })}
    </div>
  );
}
