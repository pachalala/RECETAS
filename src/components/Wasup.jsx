import React, { useState } from 'react';


function Wasup() {

    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter + 1);
        console.log(counter);
      }

      function AgregaPlato( ) {
        //setPlatos ( Platos_l.concat( Platos_lb[Plato_id]));
        console.log("aka.." );
      }
    

    return (
        <>
        <h1>Counter: {counter}</h1>
        <button onClick={handleClick }>
          Increase
        </button>
      </>
    )
}

export default Wasup
