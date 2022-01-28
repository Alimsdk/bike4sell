import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bike.css'
const Bike = ({bike}) => {
    const {id,model,CC,millage,type,gears,img,price}=bike;
    const navigate=useNavigate();
    const handlePurchase=(id)=>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div className='col-4 mb-5' >
             <div id="card">
             <img id="bike-card-img" src={img} alt="" />
             <h4>{model}</h4>
             <h6>millage:{millage} || gears:{gears} || {CC}cc </h6>
                <h5>Price: {price} Taka </h5>
                <button className="card-btn" onClick={()=>handlePurchase(id)} id="bikes-card-btn">Buy Now</button>
             </div>
        </div>
    );
};

export default Bike;