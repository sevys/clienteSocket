import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Inicio from "../components/inicio";

class App extends React.Component {
    render(){

        return (
            <React.Fragment>

                <Inicio/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default  App;