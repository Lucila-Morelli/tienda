
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

export const getProducts = new Promise ((res , rej) => {
    setTimeout(() => {
        if (categoryName){
            const filterData = data.filter((item) =>{
                return item.category === categoryName;
            });
            console.log(filterData);
            res(filterData);
        } else {
            res(data);
        }
    }, 1000);
});
  