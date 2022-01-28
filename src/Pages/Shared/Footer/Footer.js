import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='py-3' id='footer'>
            <Container>
                <Row>
                    <Col>
                     <h4>BIKE4SELL</h4>
                    </Col>
                    <Col>
                    <Row>
                        <Col className="d-flex flex-column text-white">
                           <p> Important Links</p>
                           <a href="">Home</a>
                           <a href="">About</a>
                           <a href="">Bikes</a>
                           <a href="">Reviews</a>
                           <a href="">Contact</a>
                        </Col>
                        <Col>
                           <p> Contact Informations</p>
                           <address>Email : alimsiddique18@gmail.com</address>
                           <address>Phone: 01793503532</address>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;