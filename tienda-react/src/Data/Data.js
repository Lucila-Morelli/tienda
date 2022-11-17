
export const data = [
    {
        id: 1,
        nombre : "Body verano",
        talla : "G , XG",
        color: "Gris",
        imagen : '../assets/bodyGris.png',
        category : "body",
        precio: "$980"
    },

    {
        id: 2, 
        nombre : "Remera",
        talla : "XS",
        color : "rojo",
        imagen : '../assets/remeraRoja.png',
        category : "remera",
        precio: "$1500"
},
    {
        id: 3,
        nombre : "Pantalon",
        talla : "G",
        color: " verde",
        imagen : '../assets/pantalonVerde.png',
        category : "pantalon",
        precio: "$1600"
},
{
    id: 4,
    nombre : "body verano",
    talla : "G , XG",
    color: " celeste",
    imagen : '../assets/bodyAzul.png',
    category :"body",
    precio: "$1450"
},

{
    id: 5,
    nombre : "pantalon corazones",
    talla : "XS , S",
    color: " rosa",
    imagen : '../assets/pantalonRosa.png',
    category : "pantalon",
    precio: "$1650"
},

{
    id: 6,
    nombre : "remera",
    talla : "XS, G , XG",
    color: " azul",
    imagen : '../assets/remeraCaballo.png',
    category : "remera",
    precio: "$1700"
},

{
    id: 7,
    nombre : "remera",
    talla : " G , XG",
    color: " Gris",
    imagen : '../assets/remeraAraña.png',
    category : "remera",
    precio: "$1500"
},
]

export const getProducts = (  categoryName) => {
    console.log(categoryName)
        return new Promise((res , rej) => {
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
        })
    }
    