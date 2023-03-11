  const D_Platos = 

   await fetch('http://localhost:3000/ingredientes').then((response)=> response.json())
          // .then  ((json)=>  setData(json)  )
   ;


  console.log("ingredientes: " + JSON.stringify(D_Platos));  


 