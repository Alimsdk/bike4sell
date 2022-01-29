import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    const [rating,setRating]=useState(5);
    const [comment,setComment]=useState('');
    const {user}=useAuth();

    const handleRating=e=>{
        const value=e.target.value;
        if(value>5){
            alert('please rate between 1 to 5');
        }else{
            setRating(value);
        }
    }

    const handleFeedback=e=>{
        setComment(e.target.value);
    }
  
    const handleFeedbackSubmit=e=>{
        e.preventDefault();
        const name=user.displayName;
        const email=user.email;
        const photo=user.photoURL
       const userFeedback={name,email,photo,rating,comment}

      fetch('https://frozen-river-22304.herokuapp.com/feedbacks',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(userFeedback)
      }).then(res=>res.json())
      .then(data=>{
          if(data?.acknowledged){
              alert('submitted')
          }
      })
       
    }

    return (
       <>
       <h4 className='my-5 text-center'>Let us know you Feedback </h4>
       <form onSubmit={handleFeedbackSubmit}>
            <input onBlur={handleRating} type="text" placeholder='Rate us (1 to 5)' />
            <input onBlur={handleFeedback} type="text" placeholder='Your Feedback' />
            <input type="submit" value="Submit" />
        </form>
       </>
    );
};

export default Reviews;