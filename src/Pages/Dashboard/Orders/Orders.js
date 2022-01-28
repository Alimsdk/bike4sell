import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';
import './Orders.css'
const Orders = () => {
    const [myOrders,setMyOrders]=useState(null);
    const {user}=useAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyOrders(data));
    },[user.email,myOrders])
    return (
        <Container>
            <h3 className='my-3'>Your Booked Products</h3>
         <div className="grid-container">
             {
                 myOrders?.map(order=><Order key={order._id} order={order}></Order>)
             }
         </div>
        </Container>
    );
};

export default Orders;