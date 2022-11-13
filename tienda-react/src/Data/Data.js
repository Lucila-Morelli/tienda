export const data = [
    {
        id: 1,
        nombre : "body",
        talla : "G y Xg",
        color: "Gris",
        imagen : "bodyGris"
    },

    {
        id: 2, 
        nombre : "remeras",
        talla : "xs",
        color : "rojo",
        imagen : "remeraRoja",
},
    {
        id: 3,
        nombre : "pantalon",
        talla : "G",
        color: " verde",
        imagen : "pantalonVerde"
}
]
export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, 2000);
    });
  }
