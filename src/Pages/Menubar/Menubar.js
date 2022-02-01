import React from 'react';
// import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h4 className='logo'>Feed Calculation</h4>
                <ul className='nav-links'>
                    <Link to = "/solution" className='solution'>
                        <li>Solution</li>
                    </Link>
                    <Link to = "/database" className='database'>
                        <li>Database</li>
                    </Link>
                    <Link to = "/adddata" className='adddata'>
                        <li>AddData</li>
                    </Link>
                    <Link to = "/species-reference-data" className='savedata'>
                        <li>Saved Data</li>
                    </Link>
                </ul>
            </nav>
            {/* <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Calculation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/solution">Solution</Nav.Link>
                    <Nav.Link as={Link} to="/database">Database</Nav.Link>
                    <Nav.Link as={Link} to ="/adddata">Add Data</Nav.Link>
                    <Nav.Link as={Link} to="/species-reference-data">Saved Data</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> */}
        </div>
    );
};

export default Menubar;