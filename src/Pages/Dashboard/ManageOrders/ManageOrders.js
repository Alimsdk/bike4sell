import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [allOrders,setAllOrders]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data));
    },[])
    return (
        <Container className="mt-5">
         
            <div className="grid-container">
             {
                 allOrders?.map(perorder=><ManageOrder key={perorder._id} perorder={perorder}/>)
             }
         </div>
        </Container>
    );
};

export default ManageOrders;