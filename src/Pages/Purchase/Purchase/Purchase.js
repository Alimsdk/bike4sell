import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Purchase = () => {
    const {id}=useParams();
    const [choosedBike,setChoosedBike]=useState(null);
   const {setModel}=useAuth()
  
    const navigate=useNavigate();
    const handleBuyNow=()=>{
        if(window.confirm('are you sure you want to buy?')){
            navigate('/purchaseinfo')
        }
        
    }
    useEffect(()=>{
        fetch(`https://frozen-river-22304.herokuapp.com/bikes/${id}`)
        .then(res=>res.json())
        .then(data=>{
          setChoosedBike(data)
        setModel(data.model);
         
        });
    },[])
    return (   

            <Card style={{ width: '18rem' , display:'flex',margin:'0 auto'}}>
  <Card.Img variant="top" src={choosedBike?.img} />
  
  <ListGroup className="list-group-flush">
    <ListGroupItem>Model:{choosedBike?.model}</ListGroupItem>
    <ListGroupItem>Millage:{choosedBike?.millage}</ListGroupItem>
    <ListGroupItem>Cubic Capacity: {choosedBike?.CC}</ListGroupItem>
    <ListGroupItem>Bike Type : {choosedBike?.type}</ListGroupItem>
    <ListGroupItem>Gears : {choosedBike?.gears}</ListGroupItem>
    <ListGroupItem>Price : {choosedBike?.price} Taka</ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Link style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Back to Home</Card.Link>
    <Card.Link style={{marginLeft:'90px',cursor:'pointer'}} onClick={handleBuyNow}>Buy Now</Card.Link>
  </Card.Body>
</Card>
    );
};

export default Purchase;