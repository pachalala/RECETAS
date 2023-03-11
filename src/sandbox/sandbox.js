import { D_Ingredientes, D_Platos } from "../data/Datos.js";

D_Ingredientes.forEach((ingrepadre, index) => {
  var total = 0;
   D_Platos.forEach((Plato) => {
  
    if ( !!Plato.ingredientes.find( (ingre) => ingre.id_ingrediente === ingrepadre.id  )    )  
        total = total +  Plato.ingredientes.find((ingre) => ingre.id_ingrediente === ingrepadre.id  ).grs;

     
  });
  D_Ingredientes[index].cantidad = total;
});

var O_Ingredientes = D_Ingredientes.filter(i=> i.cantidad !=0 );

console.log("D_Ingredientes:" + JSON.stringify(O_Ingredientes));
