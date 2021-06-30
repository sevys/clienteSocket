import React, {useState} from "react";
import Publicacion from "./publicacion";

function Inicio(){
    const [nombre, setNombre] = useState("");
    const [registrado, setRegistrado] = useState(false);

    const registrar = (e) =>{
        e.preventDefault();
        if (nombre !== ""){
            setRegistrado(true);
        }
    }
    return(
            <div className="App">
                {
                  !registrado &&

                    <form onSubmit={registrar}>

                        <label htmlFor=""> Introduzca su nombre</label>
                        <input value={nombre} onChange={e => setNombre(e.target.value)}/>
                        <button> Ir a la publicacion</button>
                    </form>
                }
                {
                    registrado &&
                        <Publicacion nombre={nombre}/>
                }

            </div>
    )




}
export default Inicio;