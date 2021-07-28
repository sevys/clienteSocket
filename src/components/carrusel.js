import React from "react";
import Img from '../assets/img/sasuke.jpg'
import Img2 from '../assets/img/login.png'

class Carrusel extends React.Component {
    render() {
        return (<div id="carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption">
                            <h3>Boyd W.</h3>
                            <p>TEXT</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <h3>Diane L</h3>
                            <p>TEXT</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <h3>Randall L</h3>
                            <p>TEXT</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <h3>John D.</h3>
                            <p>TEXT</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <h3>Jody B.</h3>
                            <p>TEXT</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default  Carrusel;