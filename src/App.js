import React from "react";

import Navbar from "./Componentes/Navbar/Navbar";
import Main from "./Componentes/Main/Main";
import Contador from "./Componentes/Main/ItemCount"
import Listado from "./Componentes/Main/Contenedor"
const App = () =>{
  return(
    <>
    <Navbar/>
    <Main/>
    <Contador/>
  
    </>
  )
}
export default App;