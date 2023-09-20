import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import '../screens/home.css';
import { useNavigate } from 'react-router-dom';

function AddFrame (){
const navigate = useNavigate()

    return(
        <Container className='Add-Frame'>
            <Row>
                <Col>
                <Button variant='success' onClick={() => navigate('arscene')}>
                    Create Scene
                </Button>
                </Col>
                <Col>
                <Button variant='success' onClick={() => navigate('add-model')}>
                    Add Model
                </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddFrame;