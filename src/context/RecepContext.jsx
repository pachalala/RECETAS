import { createContext, useState, useEffect } from "react";

import { D_Ingredientes, D_Platos } from "../data/Datos";

export const RecepContext = createContext();

export function RecepContextProvider(props) {
  const [Ingredientes, setIngredientes] = useState([]);

  const [Platos, setPlatos] = useState([]);

  const [Mod_Platos, setMod_Platos] = useState(false);



  //const [Platos_l, setPlatos_l] = useState([]);


  const [Platos_lb, setPlatos_lb] = useState([]);

  const [flag_C  , setFlag_C] = useState(false );
  
     

  function llena_ingredientes() {

    
    D_Ingredientes.forEach((ingrepadre, index) => {
      var total = 0;
      Platos.forEach((Plato) => {
        if (
          !!Plato.ingredientes.find(
            (ingre) => ingre.id_ingrediente === ingrepadre.id
          )
        )
          total =
            total +
            Plato.ingredientes.find(
              (ingre) => ingre.id_ingrediente === ingrepadre.id
            ).grs;
      });
      D_Ingredientes[index].cantidad = total;
    });

    setIngredientes(D_Ingredientes.filter((i) => i.cantidad != 0));

    
     
  }


  

/////////////////////////////////////////////////////////

  function trae_elemento(arr, id) {
  //  console.log("arr:" + JSON.stringify(arr) + ", id:" + id);

    return arr.filter((plato) => {
      if (plato.id == id) {
        console.log("yes.." + id);
        return plato;
      }
    });
  }

  function existe(arr, id) {
  /*  console.log(
      "existe->arr:" +
        JSON.stringify(arr) +
        ", id:" +
        id +
        ", esta:" +
        !!arr.find((plato) => plato.id === id)
    );
*/
    return !!arr.find((plato) => plato.id === id);
  }

    function AgregaPlato(Plato_id) {
    //setPlatos ( Platos_l.concat( Platos_lb[Plato_id]));

    //   if (trae_elemento(Platos_l, Plato_id)[0].id!=trae_elemento(Platos_lb, Plato_id)[0].id)

    if (!existe(Platos, Plato_id)) {
  //    console.log("esta?:no..");
      setPlatos(Platos.concat(trae_elemento(Platos_lb, Plato_id)));
    }

    //llena_ingredientes();
  }


  function EliminaPlato(Plato_id) {
    //setPlatos ( Platos_l.concat( Platos_lb[Plato_id]));

    //   if (trae_elemento(Platos_l, Plato_id)[0].id!=trae_elemento(Platos_lb, Plato_id)[0].id)
    setPlatos( Platos.filter((p) => p.id != Plato_id));

    
   // llena_ingredientes();
  }


  useEffect(() => {
    //   setPlatos_db(D_Platos);
    //   setPlatos_Lista(D_Platos);
   // llena_ingredientes();
    setPlatos_lb(D_Platos); 
   
    console.log( " ini context:: ");
   // setPlatos_l(D_Platos);

  }, []);

  //  console.log("Plato5:" + JSON.stringify(D_Ingredientes)   );

  const valor = {
    Ingredientes: Ingredientes,
    Platos: Platos,
    AgregaPlato,
    EliminaPlato,
    llena_ingredientes,
    setIngredientes,
    flag_C,
    setFlag_C,
    Mod_Platos, 
    setMod_Platos

  };

  return (
    <RecepContext.Provider value={valor}>
      {props.children}
    </RecepContext.Provider>
  );
}
export default RecepContext;
