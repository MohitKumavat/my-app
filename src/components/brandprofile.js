import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function BrandProfile(){
    return(
        <Navbar className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='#home'>VISION</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link href='#account'>
                    Mohit Kumavat 
                </Nav.Link>
                <Navbar.Text> | <a href="#login">LogOut</a></Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BrandProfile;