import './App.css';
import React from 'react';
import Login from './componentes/Login';
import Registro from './Registro';
import {Vote} from './componentes/Vote';
import Crear from './componentes/Crear';

function App() {
  return (
    <div className="App">
      <Registro/>
      <Login/>
      <Vote/>
      <Crear />
    </div>
  );
}

export default App;
