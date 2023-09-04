import { Container, Row,Col, Dropdown, ButtonGroup, Button, Card } from 'react-bootstrap';
import React from 'react';
import '../screens/home.css';
import CardImage1 from '../images/cardimage.png';
import CardImage2 from '../images/cardimage2.png';
import CardImage3 from '../images/card3image.jpeg';

function View() {
  return (
    <Container className='View-Frame'>
        <Row>
            <Col>
            <Card className='View-Scene-Card'>
            <Card.Img   src={CardImage1} />
            <Card.Body>
                <Card.Title>Plan R1</Card.Title>
                <Card.Text>
                    1500SQFT 2bed 2bath with 2 Car parking garage.
                </Card.Text>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Select</Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='View-Scene-Card'>
            <Card.Img   src={CardImage2} />
            <Card.Body>
                <Card.Title>Plan R1</Card.Title>
                <Card.Text>
                    1500SQFT 2bed 2bath with 2 Car parking garage.
                </Card.Text>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Select</Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='View-Scene-Card'>
            <Card.Img src={CardImage3} />
            <Card.Body>
                <Card.Title>Plan R1</Card.Title>
                <Card.Text>
                    1500SQFT 2bed 2bath with 2 Car parking garage.
                </Card.Text>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Select</Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
            </Card>
            </Col>
        </Row>

        <Row>
            <Col>
            <Card className='View-Scene-Card'>
            <Card.Img  src={CardImage1} />
            <Card.Body>
                <Card.Title>Plan R1</Card.Title>
                <Card.Text>
                    1500SQFT 2bed 2bath with 2 Car parking garage.
                </Card.Text>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Select</Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='View-Scene-Card'>
            <Card.Img src={CardImage2} />
            <Card.Body>
                <Card.Title>Plan R1</Card.Title>
                <Card.Text>
                    1500SQFT 2bed 2bath with 2 Car parking garage.
                </Card.Text>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Select</Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className='View-Scene-Card'>
            <Card.Img   src={CardImage3} />
            <Card.Body>
                <Card.Title>Plan R1</Card.Title>
                <Card.Text>
                    1500SQFT 2bed 2bath with 2 Car parking garage.
                </Card.Text>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Select</Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
            </Card>
            </Col>
        </Row>

    </Container>
    

  );
}

export default View;