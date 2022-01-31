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
                    {/* <Nav.Link href="/savedata">Saved Data</Nav.Link> */}
                    <Nav.Link href="/species-reference-data">Saved Reference Data</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;