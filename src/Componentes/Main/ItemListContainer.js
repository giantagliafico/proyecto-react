import React, {useEffect, useState,} from "react";
const Prop = () =>{
    const greeting = "Solo Fútbol - Idumentaria Deportiva";
    return <h1 className="greeting">{greeting}</h1>
    
    
}
export default Prop;
const productos = [
    {nombre:"Nike Tiempo Legend", id:0, precio:20.00},
    {nombre:"Umbro Sala Pro 5",id:01, precio:17.600},
    {nombre:"Nike Superfly", id:02, precio:15.000},
    {nombre:"Adidas Goletto Viii Tf", id:03, precio:17.600},
   
]
const obtenerProductos = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
    resolve(productos);
    },2000)
})
export const ItemListContainer=({greeting})=>{
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        obtenerProductos
        .then((data)=>{
        setProductos(data)
        })
        .catch((err)=>{
            console.log("algo salio mal")
            console.log(err)
        })
        

    },[])
}
