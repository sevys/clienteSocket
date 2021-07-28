import React, {useState} from "react";
import Publicacion from "./publicacion";
import imgUser from '../assets/img/imgUsers.png'

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

                        <div id="form-container">

                            <div id="contenido" className="text-center ">
                                <img src={imgUser}/>
                                <h1 className="text-center">Inicio sesion</h1>
                            <label  className="form-label text-center mt-4"> Introduzca su nombre</label>
                             <input className="form-control mt-4" style={{marginLeft:"auto",marginRight:"auto",width:"80%"}} value={nombre} onChange={e => setNombre(e.target.value)}/>
                            <button   className="btn btn btn-secondary btn-lg mt-5"> Ir a la publicacion</button>
                            </div>
                        </div>
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