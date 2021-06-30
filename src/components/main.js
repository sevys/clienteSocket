import React from 'react'
import imagen from '../assets/img/sasuke.jpg'
import socket from "./socket";


class Main extends React.Component {

    componentDidMount() {
        socket.emit('conectado', 'hola desde el cliente')

       /* socket.on('connect', () => {
            console.log('conexcion exitosa ',socket.id)
        })*/
    }

    render(){
        return (
            <main>
                <section  id="chat">
                    <img src={imagen}/>

                </section>
            </main>
        )
    }
}

export default Main;