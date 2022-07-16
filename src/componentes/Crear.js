import React from 'react'
import { crearDoc } from '../firebase'

export default function Crear() {
    let nombreCol = "clientes"

 const crea = async(e) => {
    e.preventDefault();
    let col = {};
    col.name = e.target[0].value;
    col.message = e.target[1].value;
    col.votes = 0;
    await crearDoc(nombreCol,col)
    alert("creado con exito")
    document.location.reload(true)
    }
  return (
    <div>
        <form onSubmit={crea}>
            <input type="text" placeholder="Titulo"/>
            <input type="text" placeholder="Mensaje"/>
            <button >Crear</button>
        </form>
    </div>
  )
}
