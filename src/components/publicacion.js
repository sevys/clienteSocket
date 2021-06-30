import React, {useState, useEffect, useRef} from "react";
import socket from "./socket";
import '../assets/css/app.css';

const Publicacion = ({ nombre }) => {
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);

    useEffect(() =>{
        socket.emit('conectado', nombre)
    },[nombre]);

    useEffect(()=>{
        socket.on('mensajes', mensaje=>{
            setMensajes([...mensajes, mensaje]);
        })
        return () => {socket.off()}
    },[mensajes])

    const submit = (e) =>{
        e.preventDefault();
        socket.emit('message', nombre, mensaje);
    }

    return(
        <div>
            <div className="publicacion">
                {mensajes.map((e, i) => <div key={i}><div>{e.nombre}</div><div>{e.mensaje}</div></div> )}
            </div>

            <form onSubmit={submit}>
                <label htmlFor="">Escriba su mensaje</label>
                <textarea name="" id="" cols="30" rows="10" value={mensaje} onChange={e => setMensaje(e.target.value)}>

                </textarea>
                <button>Enviar</button>
            </form>

        </div>


    )

}

export default Publicacion;