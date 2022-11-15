
export const data = [
    {
        id: 1,
        nombre : "Body",
        talla : "G y Xg",
        color: "Gris",
        imagen : '../assets/bodyGris.png'
    },

    {
        id: 2, 
        nombre : "Remera",
        talla : "XS",
        color : "rojo",
        imagen : '../assets/remeraRoja.png'
},
    {
        id: 3,
        nombre : "Pantalon",
        talla : "G",
        color: " verde",
        imagen : '../assets/pantalonVerde.png'
}
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, 2000);
    });
  }