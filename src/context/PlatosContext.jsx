
import {createContext,useState, useEffect} from 'react'

import { D_Platos } from "../data/Datos";

export const PlatosContext = createContext();


export function PlatosContextProvider(props ) {

    const [Platos_bd, setPlatos_db] = useState([]);

    const [Platos_Lista, setPlatos_Lista] = useState([]);


    useEffect(() => {
        setPlatos_db(D_Platos);
        setPlatos_Lista(D_Platos);
        
    }, []);


    function PlatosListaAgregar({PlatoId}){

        setPlatos_Lista([...Platos_Lista, Platos_bd(platoId)])
        console.log(Platos_Lista);
    }


    return (
        <PlatosContext.Provider  value={{Platos_bd,Platos_Lista}}>{props.children}</PlatosContext.Provider>
    )
}
export default PlatosContext