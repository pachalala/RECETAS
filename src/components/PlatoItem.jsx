import { useState, useEffect, useContext } from "react";
import { RecepContext } from "../context/RecepContext";

function PlatoItem({ plato }) {
  const { EliminaPlato } = useContext(RecepContext);

  function EliminaPlatox() {
    EliminaPlato(plato.id);
  }
  return (
    
      <tr key={plato.id}>
        <td>{plato.nombre}</td>
        <td>
          <button
            className="btn btn-light  "
            onClick={() => EliminaPlato(plato.id)}
          >
            x
          </button>
        </td>
      </tr>
    
  );
}
export default PlatoItem;
