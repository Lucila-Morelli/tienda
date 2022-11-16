
export const data = [
    {
        id: 1,
        nombre : "Body",
        talla : "G y Xg",
        color: "Gris",
        imagen : '../assets/bodyGris.png',
        precio: "$980"
    },

    {
        id: 2, 
        nombre : "Remera",
        talla : "XS",
        color : "rojo",
        imagen : '../assets/remeraRoja.png',
        precio: "$1500"
},
    {
        id: 3,
        nombre : "Pantalon",
        talla : "G",
        color: " verde",
        imagen : '../assets/pantalonVerde.png',
        precio: "$1600"
}
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, 2000);
    });
  }