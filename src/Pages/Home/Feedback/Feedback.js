import React from 'react';
import {Card} from 'react-bootstrap'
import Rating from 'react-rating';
const Feedback = ({feedback}) => {
    const {name,email,photo,rating,comment} = feedback;
    
    return (
        <Card border="info" style={{ width: '18rem', marginBottom:'25px' }}>
      
        <Card.Body>
        <Rating className='d-flex justify-content-center'
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
  initialRating={rating}
  readonly
/>
          <Card.Text className='py-2'>
           {comment}
          </Card.Text>
        </Card.Body>
        <Card.Header style={{display:'flex',alignItems:'center'}}>
        <img src={feedback?.photo? `${photo}` : 'https://i.pinimg.com/564x/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.jpg'} style={{width:'60px',height:'60px',borderRadius:'50%'}} alt="" />
        <div className="ms-4">
        <h6>Name: {name}</h6>
        <p style={{fontSize:'14px'}}>Email : {email}</p>
        </div>
        </Card.Header>
      </Card>
      
    );
};

export default Feedback;