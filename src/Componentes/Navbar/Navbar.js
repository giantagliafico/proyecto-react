


import "./Navbar.css";
import logo from "./aa9ff9ec14b749a8b6dfb374a20cbbfc.png";
import CartWidget from "./CartWidget";

const Navbar = () =>{


const lista =[
    {nombre:"Botines", id:0, ruta:"#"},
    {nombre:"Camisetas", id:1, ruta:"#"},
    {nombre:"Indumentaria", id:2, ruta:"#"},
    {nombre:"Equipos", id:3,ruta:"#"}
]


  return <nav className="nav-index">
    <img className="logo" src={logo} alt="" />
    <div className="lista">
    {
        lista.map((listas)=>{
            return <a key={listas.id} className="a" href={listas.ruta}>{listas.nombre}</a>
        })
    }
  </div>
  <div>
    <input className="buscador" type="text" placeholder="..." />
    <button className="boton">BUSCAR</button>
  </div>
  
  <CartWidget/>
  </nav>

}
export default Navbar;