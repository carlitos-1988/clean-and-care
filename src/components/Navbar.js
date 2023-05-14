import { Component } from "react";
import { Navbar,Nav, NavDropdown, Container, Modal, Button, Form } from "react-bootstrap";



class Header extends Component{
    constructor(props){
        super(props); 
        this.state = {
            modalShow:false
        }
    }

    handleModalShow = () => {
        this.setState({
            modalShow: true
        })
    }

    handleModalClose = () =>{
        this.setState({
            modalShow: false
        })
    }

    render(){
        return(
            <>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">Clean and Care</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={this.handleModalShow}>Require an Estimate</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
                <NavDropdown.Item href="/work">Previous Work</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <MyModal  show={this.state.modalShow} onHide={this.handleModalClose}/>
        </>
    )}
};

class MyModal extends Component{
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Contact Us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Please Fillout Form</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="string" placeholder="Enter Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="string" placeholder="Enter Phone Number" />
                            </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Urgent ?" />
                            </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
        }
    }

export default Header; 