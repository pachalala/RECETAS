import { useState,  useContext } from "react";
import reactLogo from "./assets/react.svg";
import "bootswatch/dist/sandstone/bootstrap.min.css";

import Buscador from "./components/Buscador";

import PlatosLista from "./components/PlatosLista";

import { RecepContext } from "./context/RecepContext";

import Nav from "./components/Nav";


import { ListaCompras } from "./components/ListaCompras";

/*
<button onClickd={() =>d setCount(count => count + 1)}>
        count is {count}
      </button>
*/

function App() {
  const [count, setCount] = useState(0);

  const {Mod_Platos,  setMod_Platos } = useContext(RecepContext);


  if(!Mod_Platos)  
  return (
    <div className="container p-4">
         
    <div className="card">
   <div classxName="card mb-3">
          <Nav />
          <div class="container-fluid">
             <Buscador />
            <PlatosLista />
            <ListaCompras />
           </div>  
           </div>
          </div>
        </div>
     
  ) ;
  else
  return (
  <div className="container p-4">
         
           <div className="card">
          <div classxName="card mb-3">
          <Nav />
            
          </div>
          </div>
        </div>
  )
}

export default App;
