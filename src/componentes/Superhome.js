import React, { useEffect, useState } from 'react'

import "./assets/superhome.css"
import vlogo from "./assets/v.png";
import ulogo from "./assets/u.png";
import otelogo from "./assets/ote.png";
import { useNavigate } from 'react-router-dom';
export default function Superhome() {
    const navigate = useNavigate();
    const [loged,setLoged] = useState(false);
  let clave = "sesion1"
  let l = localStorage;
  useEffect(()=>{
    setLoged(l.getItem(clave))
  },[])

  return (
    <div className='suphome'>
        <div>
        <div className="imagenses">
          <img className="vlogo" src={vlogo} alt="v del logo" />{" "}
          <img className="ologo" src={otelogo} alt="ote del logo" />
          <img className="ulogo" src={ulogo} alt="u del logo" />{" "}
        </div>
        <section>
            <h3>
                ¿Que es esto?
            </h3>
            <p>
                Vote Ú es una web-app para votar cosas.<strong>Ni más ni menos</strong> 
            </p>
        </section>
        <section>
            <h3>
                ¿Que se vota?
            </h3>
            <p>
                <strong>Lo que quieras</strong> que se vote o pienses que se deba votar.
            </p>
        </section>
        <section>
            <h3>
                ¿Como accedo?
            </h3>
            <p>
                Desde aqui!!
                <br/>
                <button onClick={()=>{
                    loged ? navigate("/home",{replace:true}) : navigate("/inicio",{replace:true})
                }}>
                    Entrar
                </button>
            </p>
        </section>
        </div>
        </div>
  )
}
