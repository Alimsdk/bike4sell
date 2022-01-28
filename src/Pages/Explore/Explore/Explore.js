import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import SingleBikes from '../SingleBikes/SingleBikes';

const Explore = () => {
    const [bikesInfo,setBikesInfo]=useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then(res=>res.json())
        .then(data=>setBikesInfo(data));
    },[])
    return (
       <div id="explore-bikes">
            <Container >
            <Header/>
          <div className='pt-5'>
          <h2 className='my-5 text-white'>CheckOut Our All Bikes</h2>
            <div className="row gx-5">
            {
                bikesInfo?.map(bike=><SingleBikes key={bike.id} bike={bike}/>)
            }
            </div>
          </div>
        </Container>
       </div>
    );
};

export default Explore;