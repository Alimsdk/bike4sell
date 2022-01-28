import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'
import bikeimg from '../../../images/38725.jpg'


const AboutUs = () => {
    return (
        <div id='about-us'>
        <Container>
            <Row className="align-items-center">
                <Col xs={{order:'last'}} md={{order:'first'}}>
                <h6>why us?</h6>
                <h3>About Bike4Sell</h3>
                <p>Hello, we are bike sellers around the world as well as bikes so can understand your emotions as 
                    as a biker ! So, we are providing 1year free service warrenty and obviously lowest price gurantee! So,get your dream bike now!
                </p>
                </Col>
               <Col xs={{order:'first'}} md={{order:'last'}}>
               <img id="about-bike" src={bikeimg} alt="" />
               </Col>
            </Row>
        </Container>
        </div>
    );
};

export default AboutUs;