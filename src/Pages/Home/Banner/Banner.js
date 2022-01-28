import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    const navigate=useNavigate();
    return (
        <div id="banner">
            <div id="banner-info">
                <h2>Buy Your Dream Bike  </h2>
                <h3>At The <span>Cheapest Price</span> </h3>
                <Button variant="link" onClick={()=>navigate('/explore')}>Explore Now!</Button>
            </div>
        </div>
    );
};

export default Banner;