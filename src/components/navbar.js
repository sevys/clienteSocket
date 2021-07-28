import React from "react";

class Navbar extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse container justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio de sesion</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;