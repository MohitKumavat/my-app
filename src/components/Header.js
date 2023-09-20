import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function BrandHeader(){

    const navigate = useNavigate()
    return(
        <Navbar className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand onClick={() => navigate('/')} style={{fontSize:'24px'}}>VISION</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link onClick={() => navigate('profile')}>
                    Mohit Kumavat 
                </Nav.Link>
                <Navbar.Text style={{paddingLeft:'10px', paddingRight: '10px'}}> | </Navbar.Text>
                <Nav.Link onClick={() => navigate('login')}  style={{borderStyle: 'solid', borderColor:'darkgrey', borderWidth:'2px', borderRadius: '10px', padding: '2px'}}>
                    Logout
                </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BrandHeader;