import { Component } from "react";
import Banner from "./Banner";
import Services from "./Services";
import { Container, Row, Col } from "react-bootstrap";

class Body extends Component{
    render(){
        return(
            <>
            <Container fluid className="intro">
                <Row>
                    <Col xs={12} md={8}>
                    <Banner />
                    </Col>
                    <Col xs={6} md={4}>
                    <h1>Clean and Care</h1>
                    <p>Welcome to Clean and Care, your go-to cleaning service in the greater Seattle area! We are dedicated to providing top-notch cleaning services at affordable rates, without compromising on quality. Our team of experienced cleaners is trained to handle all types of cleaning tasks, from residential to commercial spaces. With attention to detail and a commitment to customer satisfaction, we ensure your space is left spotless and tidy. Contact us today to schedule your cleaning appointment and experience the difference of Clean and Care.</p>
                    </Col>
                </Row>
            </Container>
            <hr className="separator"></hr>
            <Services />
            </>
        )
    }
}

export default Body;