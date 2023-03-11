import { useState, useEffect, useContext } from "react";
import { RecepContext } from "../context/RecepContext";
import { D_Platos } from "../data/Datos";

import PlatoItem from "./PlatoItem";
//import {ListaCompras} from './ListaCompras'

function PlatosLista() {
  const { Platos, flag_C } = useContext(RecepContext);

  if (!flag_C)
    return (
      <>
        <div>
          <h3 className="card-header">Platos</h3>
          <div  className="card-body">
            <tbody><table>
            {Platos.map((plato) => (
              <PlatoItem plato={plato} />
            ))}
            </table>
            </tbody>
          </div>
        </div>
      </>
    );
  else return <div></div>;
}

export default PlatosLista;
