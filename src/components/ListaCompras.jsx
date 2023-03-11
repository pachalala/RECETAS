import { useState, useEffect, useContext } from "react";

import { RecepContext } from "../context/RecepContext";
import { D_Ingredientes } from "../data/Datos";

export function ListaCompras() {
  const {
    Platos,
    Ingredientes,
    llena_ingredientes,
    setIngredientes,
    flag_C,
    setFlag_C,
  } = useContext(RecepContext);

  //const [Ingredientes, setIngredientes] = useState([]);

  const [flag, setFlag] = useState(true);

  function toggle(i) {
    const ingre = [...Ingredientes];
    ingre[i].chek = !Ingredientes[i].chek;
    setIngredientes(ingre);
  }

  useEffect(() => {
    // console.log("lista compras ini ----- ---------------");
    // setPlato_id(Platos[0].id);

    llena_ingredientes();

    // console.log("Platos como parametro:" +  JSON.stringify(Platos));
  }, [Platos]);

  return (
    <>
      <div>
        <h3 className="card-header">Lista compras</h3>
        <div className="card-body">
          <button
            className="btn btn-success btn-block mt-2"
            onClick={() => {
              setFlag_C(!flag_C);
            
            }}
          >
             {!flag_C ?  'A comprar!' : 'Volver'}
          </button>
          <tbody>
          <table >
          {Ingredientes.map((ingre, index) =>
            !flag_C ?  
              <tr  className={ ''} style={{textDecoration:''  }}><td>{ingre.nombre}</td><td>{ingre.cantidad} grs </td></tr>
                  :  

               <tr className={ ingre.chek ? 'text-muted' : ''}
               key={index}
               style={{textDecoration:  
                   ingre.chek
                   ? 'line-through'
                   : '' 
               }} >
               <td>
                {ingre.nombre} </td><td> {ingre.cantidad} grs
                </td><td>
                <button className="btn btn-light   " onClick={() => toggle(index)}>
                  {!ingre.chek ? "✓" : "x"}
                </button>
                 </td>
              </tr>
          )}
          </table>
          </tbody>
        </div>
      </div>
    </>
  );
}
