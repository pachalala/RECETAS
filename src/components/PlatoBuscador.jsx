import { D_Platos } from "../data/Datos";
 
import { useState, useEffect } from "react";

function PlatosLista() {
  const [Platos_l, setPlatos] = useState([]);
  const [Plato_id, setPlato_id] = useState([]);


  useEffect(() => {
    setPlatos(D_Platos);
    setPlato_id(D_Platos[0].id)
}, []);


  

  return (
    <div>
      <h1>Platos lista</h1>
      <select onChange={(e) => setPlato_id( e.target.value )}>
    
      {Platos_l.map(plato => (
         <option value={plato.id}>{plato.nombre}</option>
      ))}
       </select >
       idselect:{Plato_id}
       <button onClick="" >+</button>
    </div>
  );
}

export default PlatosLista;
