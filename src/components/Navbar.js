import { Component } from "react";
import { Navbar,Nav, NavDropdown, Container, Modal, Button, Form } from "react-bootstrap";



class Header extends Component{
    constructor(props){
        super(props); 
        this.state = {
            modalShow:false,
            
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
    constructor(props){
    super(props);
    this.state={
        formFullName : ' ',
        formEmail : ' ', 
        formNumber : ' ',
        formUrgent: ' '
    }
    }

    handleInputChange = (event)=>{
        const target = event.target;
        console.log('made it here');
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.id;
        console.log(name+' ---->'+value);
        this.setState({
            [name]: value
        })
        
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const { formFullName, formEmail, formUrgent, formNumber } = this.state;

        const mailtoLink = `mailto:honeylove3922@gmail.com?subject=Clean%20and%20Care%20Contact%20
        Form&body=Email:%20${formEmail}%0DFull Name:%20${formFullName}%0DFull%20$Phone Number:%20${formNumber}%0DUrgent:%20${formUrgent ? 'Yes' : 'No'}`;
        window.location.href = mailtoLink;
        
    }


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
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.handleInputChange} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formFullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="string" placeholder="Enter Full Name"  onChange={this.handleInputChange}/>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="string" placeholder="Enter Phone Number" onChange={this.handleInputChange} />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formUrgent">
                                    <Form.Check type="checkbox" label="Urgent ?" onChange={this.handleInputChange}/>
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