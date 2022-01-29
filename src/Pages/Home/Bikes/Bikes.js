import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {
    const navigate=useNavigate();
    const [bikesInfo,setBikesInfo]=useState(null);

    useEffect(()=>{
        fetch('https://frozen-river-22304.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>setBikesInfo(data));
    },[])
    return (
        <div id="bikes">
        <Container className="mt-5">
            <h2 >Our Bikes</h2>
            <div className="row gx-5">
            {
                bikesInfo?.slice(0,6).map(bike=><Bike key={bike._id} bike={bike}></Bike>)
            }
        </div>
        <Button variant="link" className="d-flex mx-auto" onClick={()=>navigate('/explore')}>Checkout More Bikes</Button>
        </Container>

        </div>
    );
};

export default Bikes;