import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const navigate=useNavigate();
    const {user,logOut}= useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand href="#home">Bike4Sell</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center fs-6">
            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
            <Nav.Link as={HashLink} to='/home#about-us'>About Us</Nav.Link>
            <Nav.Link as={HashLink} to='/home#bikes'>Our Bikes</Nav.Link>
            <Nav.Link as={HashLink} to='/explore'>Explore More</Nav.Link>
            <Nav.Link as={HashLink} to='/home#'>Reviews</Nav.Link>
            <Nav.Link as={HashLink} to='/home#footer'>Contact Us</Nav.Link>
         
          </Nav>
          {!user?<Nav className="ms-auto">
            <Button variant="link mx-3 text-white" onClick={()=>navigate('/login')}>LogIn</Button>
            <Button variant="success py-0 px-4" onClick={()=>navigate('/register')}>Register</Button>{' '}
          </Nav>
          :    
            <div>
              <span className='text-white'>Hello, {user?.displayName?.split(' ')[0]}</span>
            <Button variant="link" onClick={()=>navigate('/dashboard/orders')} style={{color:'white'}}>Dashboard</Button>
              <button onClick={logOut}>LogOut</button>
            </div>
       
          }
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    
    );
};

export default Header;