import { useState, useEffect, useContext } from "react";
import { D_Platos } from "../data/Datos";
import { RecepContext } from "../context/RecepContext";

function Buscador() {
  const { AgregaPlato, llena_ingredientes, flag_C } = useContext(RecepContext);
  const [Plato_id, setPlato_id] = useState([]);

  function AgregaPlatox() {
    AgregaPlato(Plato_id);
    // llena_ingredientes();
  }

  useEffect(() => {
    //  console.log("id:" + Platos[0].id);
    setPlato_id(D_Platos[0].id);
  }, []);

  if (!flag_C)  
    return (
     
      <>
    
        <h3 className="card-header">Buscar</h3>
          


        <div className="row">
        <div className="col-md-4">
           <div className="input-group">
            <select
              onChange={(e) => setPlato_id(e.target.value)}
              
              className="form-select"
            >
              {D_Platos.map((plato) => (
                <option value={plato.id}>{plato.nombre}</option>
              ))}
            </select>
            <button type="button"
              className="btn btn-primary"
              id="btn"
              onClick={AgregaPlatox}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>

 




      </>
    );
  else return <div></div>;
}

export default Buscador;
