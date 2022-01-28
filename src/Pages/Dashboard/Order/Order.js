import React from 'react';
import { Button } from 'react-bootstrap';
import './Order.css'

const Order = ({order}) => {
    const {_id,bookedProduct,userName,userEmail,userAddress}=order;

    const cancelOrder=()=>{
      if(window.confirm('are you sure you want to delete?')){
          fetch(`http://localhost:5000/orders/${_id}`,{
              method:'DELETE'
          }).then(res=>res.json())
          .then(data=>console.log(data))
      }
    }

    
    return (
        <div id="order-card">
            <p>Product Name : {bookedProduct}</p>
            <p>Booked By : {userName}</p>
            <p>User Email : {userEmail}</p>
            <p>Address : {userAddress}</p>
            <Button  onClick={cancelOrder} style={{color:'white',backgroundColor:'orangered'}}>Cancel Order</Button>
        </div>
    );
};

export default Order;