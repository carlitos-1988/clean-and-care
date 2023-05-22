import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Contact extends Component {

    constructor(props){
        super(props);
        this.state ={
            formName : ' ',
            formEmail : ' ', 
            formMessage : ' ',
            formCity : ' ',
            formRooms : ' ', 
            formDate : ' ', 
            formUrgent : ' ',
            formRV: ' '
        }
    }

    handleInputChange = (event)=>{
        const target = event.target;
        
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.id;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const { formName, formEmail, formMessage, formCity, formRooms, formDate, formUrgent,formRV } = this.state;


        const mailtoLink = `mailto:honeylove3922@gmail.com?subject=Clean%20and%20Care%20Contact%20
        Form&body=Name:%20${formName}%0DEmail:%20${formEmail}%0DMessage:%20${formMessage}%0DCity:%20${formCity}%0DRooms%20Needed:%20${formRooms}%0DDate%20Requested:%20${formDate}%0DUrgent:%20${formUrgent ? 'Yes' : 'No'}%0DRV%20Services:%20${formRV ? 'Yes' : 'No'}`;
        window.location.href = mailtoLink;
        
    }



    render() {
    return (
        <Container >
            <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <h1>Contact Us</h1>
                <p>Please fill out the form below to contact us.</p>
                <address>
                Clean and Care
                <br />
                Greater Seattle Area
                <br />
                Phone: <a href="tel:253-348-9651">253-348-9651</a>
                <br />
                Email:{" "}
                <a href="mailto:honeylove3922@gmail.com">
                    HoneyLove3922@gmail.com
                </a>
                <br />
                </address>
                <Form onSubmit={this.handleSubmit}>


                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email" onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    onChange={this.handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" onChange={this.handleInputChange} />
                </Form.Group>

                <br></br>
                <Form.Group controlId="formRooms" onChange={this.handleInputChange}>
                <Form.Select >
                    <option>Select Number of Rooms</option>
                    <option value="1" >One</option>
                    <option value="2" >Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five +</option>
                </Form.Select>
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Date Requesting Service</Form.Label>
                    <Form.Control type="date" placeholder="Enter date" onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="formUrgent">
                    <Form.Check type="checkbox" label="Urgent matter" onChange={this.handleInputChange}/>
                </Form.Group>

                <hr></hr>

                <Form.Group controlId="formRV">
                    <Form.Check type="checkbox" label="Services for RV? " onChange={this.handleInputChange}/>
                </Form.Group>

                <hr></hr>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
            </Row>
        </Container>
        );
    }
}

export default Contact;
