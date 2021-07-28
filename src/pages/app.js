import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Inicio from "../components/inicio";
import Navbar from "../components/navbar"
import Publicacion from "../components/publicacion";

class App extends React.Component {
    render(){

        return (
            <React.Fragment>
                <Header/>
                <Inicio/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default  App;