import { Component } from "react";
import { Col, Container, Image, Row, Card, Button } from "react-bootstrap";


class Services extends Component{
    render(){
        return(
            <>
            <br></br>
            <Container className="services">
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                <Image 
                src="https://images.unsplash.com/photo-1601160463734-d4006a0960e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                width={300} 
                height={300} 
                rounded />
                </Col>
                <Col md={{ span: 3, offset: 4 }}>
                <Card>
                    <Card.Body>
                        <Card.Title>Disinfection Services</Card.Title>
                        <Card.Text>
                        At Clean and Care, we offer professional disinfection services to keep your space free from harmful bacteria and viruses. Our disinfection process uses EPA-approved products and follows strict protocols to ensure maximum effectiveness. Trust us to keep you and your space safe and healthy.
                        </Card.Text>
                        <Button variant="link" href="/contact">Contact Us</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={{ span: 2, offset: 1 }}>
                <Image 
                src="https://images.unsplash.com/photo-1607827448452-6fda561309d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2353&q=80" 
                width={355} 
                height={325} 
                roundedCircle />
                </Col>
                <Col md={{ span: 3, offset: 4 }}>
                <Card>
                    
                    <Card.Body>
                        <Card.Title>Worry Free Guarantee</Card.Title>
                        <Card.Text>
                        With Clean and Care, you can enjoy worry-free cleaning services. We are fully insured, and our team is thoroughly vetted and trained to ensure your complete satisfaction. Sit back and relax while we take care of your cleaning needs with professionalism and attention to detail.
                        </Card.Text>
                        <Button variant="link" href="/contact">Contact Us</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                <Image 
                src="https://images.unsplash.com/photo-1543936014-81db3ef51ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3287&q=80" 
                width={410} 
                height={325} 
                rounded />
                
                </Col>
                <Col md={{ span: 4, offset: 3 }}>
                <Card>
                    
                    <Card.Body>
                        <Card.Title>Last Minute Services</Card.Title>
                        <Card.Text>
                        Need a cleaning service ASAP? Clean and Care has got you covered with our last-minute cleaning services. Our team is always ready to accommodate your urgent cleaning needs, whether it's a last-minute party or unexpected guests. With our flexible scheduling options, you can count on us to be there when you need us the most.
                        </Card.Text>
                        <Button variant="link" href="/contact">Contact Us</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
            <br></br>
            </>
        )
    }
}

export default Services;