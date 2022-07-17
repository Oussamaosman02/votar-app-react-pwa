import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./componentes/Registro";
import Login from "./componentes/Login";
import Crear from "./componentes/Crear";
import Superhome from "./componentes/Superhome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Superhome />} />
      <Route path="/inicio" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/crear" element={<Crear />} />
      <Route path="/home" element={<App />} />
    </Routes>
  </BrowserRouter>
);
