import React, {useState, useEffect, useRef} from "react";
import socket from "./socket";
import '../assets/css/app.css';
import Carrusel from "./carrusel";

import Img from '../assets/img/sasuke.jpg'

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
        <div id="publicacion-main">
               <img id="img-publicacion" src={Img}/>

            <div className="publicacion form-control">
                {mensajes.map((e, i) => <div key={i}><div>{e.nombre}</div><div>{e.mensaje}</div></div> )}
            </div>
            <form className="form-inline" id="Msj" onSubmit={submit}>
                <div className="form-group mx-sm-3">
                <textarea className="form-control" placeholder="Escribe tu mensaje" id="" cols="10" rows="2" value={mensaje} onChange={e => setMensaje(e.target.value)}>
                </textarea>
                </div>
                <button className="btn btn-primary"> Enviar</button>

            </form>
        </div>
    )
}

export default Publicacion;