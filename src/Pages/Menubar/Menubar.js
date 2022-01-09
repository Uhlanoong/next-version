import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';

const Menubar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Calculation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/solution">Solution</Nav.Link>
                    <Nav.Link href="/database">Database</Nav.Link>
                    <Nav.Link href="/adddata">Add Data</Nav.Link>
                    {/* <Nav.Link href="/output">Output</Nav.Link> */}
                    {/* <Nav.Link href="/practice">Practice</Nav.Link> */}
                    {/* <Nav.Link href="/stackoverflow">Stackoverflow</Nav.Link> */}
                    {/* <Nav.Link href="/calculation">Calculation</Nav.Link> */}
                    {/* <Nav.Link href="/age">Age</Nav.Link>
                    <Nav.Link href="/previous">Previous</Nav.Link> */}

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;