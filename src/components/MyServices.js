import { Component } from "react";
import { Carousel } from "react-bootstrap";



class MyServices extends Component{
    render(){
        return(
            <>
            <Carousel className="about" variant="dark">

                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/dyning-room.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/living-room.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/loft.jpg")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/loft2.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/micro1.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/micro2.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/Toilet.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/Toilet2.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </>
        )
    }
}

export default MyServices;