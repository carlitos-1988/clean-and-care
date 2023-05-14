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
                    <h3>
                    <b>
                    As a cleaning service, we take pride in cleaning dining rooms top to bottom to ensure a hygienic and inviting space for our clients. Our process includes dusting high surfaces, cleaning furniture, and thoroughly cleaning floors and baseboards. We pay attention to every detail to provide a spotless dining room for our clients.
                    </b>
                    </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/living-room.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>
                    <b>
                    Cleaning living rooms typically involves dusting or wiping down furniture and decor, vacuuming or sweeping the floors, and removing any trash or clutter. We aim to create a comfortable and inviting space by paying attention to details such as cleaning light fixtures, fluffing pillows, and arranging decor as desired.
                    </b>
                    </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/loft.jpg")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>
                    <b>
                    Cleaning apartments for move in or move out involves a deep cleaning of the entire living space, including cleaning kitchen appliances, bathrooms, and windows. Our team uses high-quality cleaning products and equipment to ensure that the apartment is ready for its new occupants, leaving a fresh and spotless environment.
                    </b>
                    </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/loft2.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>
                    <b>
                    As a cleaning service in the state of Washington, we offer our top-quality cleaning services to homes, offices, and commercial spaces throughout the state, leaving every space spotless and hygienic.
                    </b>
                    </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/micro1.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>
                    <b>
                    Cleaning all kitchen items involves thoroughly cleaning appliances, such as ovens and refrigerators, scrubbing countertops, washing dishes, and wiping down cabinets and drawers. We pay attention to every detail to ensure that all kitchen items are sanitized and sparkling clean for our clients.
                    </b>
                    </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/micro2.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>
                    <b>
                    At our cleaning service, we make sure to leave appliances sparkling clean and free of grime and residue, using high-quality cleaning products and techniques to ensure optimal results.
                    </b>
                    </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/Toilet.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>
                    <b>
                    As a comprehensive cleaning service, we are committed to ensuring that no surface or item is left uncleaned, tackling even the toughest cleaning challenges with our expertise and attention to detail.
                    </b>
                    </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-servicesA">
                    <img
                    className="d-block w-100 my-services"
                    src= {require("../images/Toilet2.png")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>
                    <b>
                    We take great pride in our ability to exceed our customers' expectations with our top-quality cleaning services and exceptional customer service, and our many satisfied customers can attest to our commitment to delivering a consistently excellent cleaning experience that keeps them coming back for more.
                    </b>
                    </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </>
        )
    }
}

export default MyServices;