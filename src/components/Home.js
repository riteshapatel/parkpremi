/**
 * @author ritesh patel 
 * @description Home component. Houses landing page with a Bootstrap Carousel.
 */
import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    /**
     * @function renders component
     */
    render () {
        const imgStyle = {
            border: '2px solid #404040',
            borderRadius: '5px'
        },
        containerBackground = {
            background: '#eee'
        }

        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-10 offset-sm-1">
                        <div className="card bg-default">
                            <div className="card-body" style={containerBackground}>
                                <i className="fa fa-tree text-success"></i> ParkPremi: I truly am in <i className="fa fa-heart text-danger"></i> with our national parks.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-10 offset-sm-1">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 img-fluid" style={imgStyle} src="zion-wallpaper.jpg?auto=yes&bg=777&fg=555&text=Zion National Park" alt="Zion National Park" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h4>Zion National Park</h4>
                                        <p>Oh Angel's landing</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid" style={imgStyle} src="yosemite-wallpaper.jpg?auto=yes&bg=666&fg=444&text=Yosemite National Park" alt="Yosemite National Park" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h4>Yosemite National Park</h4>
                                        <p>Great Dome</p>
                                    </div>                                    
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid" style={imgStyle} src="valley-wallpaper.jpg?auto=yes&bg=555&fg=333&text=Monument Valley" alt="Monument Valley" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h4>Monument Valley</h4>
                                        <p>Breathtaking landscapes</p>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;