import { useState, useEffect, useContext } from "react";
import { RecepContext } from "../context/RecepContext";
import { D_Platos } from "../data/Datos";

import PlatoItem from "./PlatoItem";
//import {ListaCompras} from './ListaCompras'

function Nav() {
  const {Mod_Platos,  setMod_Platos } = useContext(RecepContext);

  function M_platos() {
    console.log("click menu platos");

     setMod_Platos(!Mod_Platos);
  }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">RECIPE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>   
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    M_platos();
                  }}
                >
                  Platos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ingredientes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  
}

export default Nav;
