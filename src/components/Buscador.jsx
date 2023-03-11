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
      <div>
        <h3 className="card-header">Buscador</h3>
        <div className="card-body">
          <div className="input-group mb-3">
            <select
              onChange={(e) => setPlato_id(e.target.value)}
              data-bs-toggle="dropdown"
              className="form dropdown-toggle"
            >
              {D_Platos.map((plato) => (
                <option value={plato.id}>{plato.nombre}</option>
              ))}
            </select>
            <button
              className="btn btn-primary btn-block mt-2"
              id="btn"
              onClick={AgregaPlatox}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
}

export default Buscador;
