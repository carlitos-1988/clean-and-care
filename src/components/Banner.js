import { Component } from "react";
import { Carousel } from "react-bootstrap";

class Banner extends Component{
    render(){
        return(
            <>
                <Carousel fade>
                    <Carousel.Item className="card">
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1606724553879-4c01add4acb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
                        alt="First slide"
                        
                        
                        />
                        <Carousel.Caption>
                        <h4>We use Tried and True Products</h4>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h4>Being Sanitary is of the Utmost Importance</h4>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1618038483079-bfe64dcb17f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h4>Cleaning is a Process</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}


export default Banner;