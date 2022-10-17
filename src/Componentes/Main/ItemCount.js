import { useState } from "react";


const Contador  = ()=>{
    const [contador, setContador] = useState(1);
    const handerClickSumar= () =>{
        setContador(contador + 1)
    };
    const handerClickRestar= () =>{
        setContador(contador - 1)
    };
    const handerClickReset= () =>{
        setContador(1)
    };
    return <div>
        <h1>{contador}</h1>
        <button onClick={handerClickSumar}>Sumar</button>
        <button onClick={handerClickRestar}>Restar</button>
        <button onClick={handerClickReset}>Reset</button>
    </div>
   
}
export default Contador;
