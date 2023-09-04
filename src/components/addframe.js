import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import '../screens/home.css';
import Aframescene from '../screens/aframescene.js'

function AddFrame (){
    return(
        <Container className='Add-Frame'>
            <Row>
                <Col>
                <Button variant='success' onClick={Aframescene}>
                    Create Scene
                </Button>
                </Col>
                <Col>
                <Button variant='success'>
                    Add Model
                </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddFrame;