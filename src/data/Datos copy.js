export const D_Platos = 

    fetch('https://official-joke-api.appspot.com/random_ten').then((response)=> response.json())



[
  {
    id: 1,
    nombre: "porotos con riendas",
    integrantes: 1,

    ingredientes: [
       {
        id_ingrediente:1,
        grs: 100
       },
       {
        id_ingrediente:2,
        grs: 50  
       },
       {
        id_ingrediente:3,
        grs: 50
       },
       {
        id_ingrediente:7,
        grs: 30
       }
    ]
 
  },
  {
    id: 2,
    nombre: "pollo con arroz",
    integrantes: 2,

    ingredientes: [
       {
        id_ingrediente:3,
        grs: 50
       },
       {
        id_ingrediente:6,
        grs: 150
       },
       {
        id_ingrediente:4,
        grs: 50
       }
    ]
 
  },
  {
    id: 3,
    nombre: "fideo bolognesa",
    integrantes: 3,

    ingredientes: [
       {
        id_ingrediente:3,
        grs: 50
       },
       {
        id_ingrediente:9,
        grs: 50
       },
       {
        id_ingrediente:7,
        grs: 50
       },
       {
        id_ingrediente:8,
        grs: 50
       }
    ]
  }
];


export const D_Ingredientes = [
  {
    id: 1,
    nombre: "porotos",
    cantidad:0,
    chek:false
  },
  {
    id: 2,
    nombre: "zapallo",
    cantidad:0,
    chek:false 
  },
  {
    id: 3,
    nombre: "cebolla",
    cantidad:0,
    chek:false 
  },
  {
    id: 4,
    nombre: "arroz",
    cantidad:0,
    chek:false 
  },
  {
    id: 5,
    nombre: "pimenton",
    cantidad:0,
    chek:false 
  }
  ,
  {
    id: 6,
    nombre: "pollo",
    cantidad:0,
    chek:false 
  }
  ,
  {
    id: 7,
    nombre: "fideos",
    cantidad:0,
    chek:false 
  }
  ,
  {
    id: 8,
    nombre: "carne molida" ,
    cantidad:0,
    chek:false
  }
  ,
  {
    id: 9,
    nombre: "salsa de tomate" ,
    cantidad:0,
    chek:false
  }
  ,
  {
    id: 10,
    nombre: "ajo" ,
    cantidad:0,
    chek:false
  },
  {
    id: 10,
    nombre: "caldo verduras" ,
    cantidad:0,
    chek:false
  }

];

