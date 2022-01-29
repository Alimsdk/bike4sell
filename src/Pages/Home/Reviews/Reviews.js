import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';

const Reviews = () => {
    const [allFeedbacks,setAllFeedbacks]=useState(null);
    useEffect(
        ()=>{
            fetch('https://frozen-river-22304.herokuapp.com/feedbacks')
            .then(res=>res.json())
            .then(data=>setAllFeedbacks(data));
        }
        ,[])
    return (
       <Container className="mt-5" id="reviews">
       <h4>Our Users Feedback</h4>
       <div className="grid-container mt-5">
            {
                allFeedbacks?.map(feedback=><Feedback key={feedback._id} feedback={feedback} />)
            }
        </div>
       </Container>
    );
};

export default Reviews;