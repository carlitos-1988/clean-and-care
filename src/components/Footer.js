import { Component } from "react";
import { Container, Navbar } from "react-bootstrap";



class Footer extends Component{

    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed="bottom" sticky="bottom">
            <Container>
                <Navbar.Brand href="#home">
                Clean & Care
                </Navbar.Brand>
                <a href="/contact" title="broom icons">Request an estimate</a>
            </Container>
            </Navbar>
        )
    }
}

export default Footer;