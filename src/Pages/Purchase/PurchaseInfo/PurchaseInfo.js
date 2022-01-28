import React, { useState } from 'react';
import Header from '../../Shared/Header/Header';
import {useNavigate} from 'react-router-dom'
const PurchaseInfo = () => {
    const [purchaseInfo,setPurchaseInfo]=useState(null);
    const navigate=useNavigate();
    const handlePurchaseValue=e=>{
      const name=e.target.name;
      const value=e.target.value;
      const newPurchaseInfo={...purchaseInfo}
      newPurchaseInfo[name]=value;
      setPurchaseInfo(newPurchaseInfo)
    }

    const handlePurchaseInfo=(e)=>{
    
      console.log(purchaseInfo);
      fetch('http://localhost:5000/orders',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(purchaseInfo)
      }).then(res=>res.json())
      .then(data=>console.log(data))
      e.preventDefault();
      alert('Order Successfull');
      navigate('/');
    }
    return (
        <div>
            <Header/>
              <form onSubmit={handlePurchaseInfo} style={{marginTop:'200px'}}>
               <input type="text" name="bookedProduct" onBlur={handlePurchaseValue}  placeholder='Booked Product' />
               <input type="text" name="userName" onBlur={handlePurchaseValue}  placeholder='Your Name' />
               <input type="email" name='userEmail' onBlur={handlePurchaseValue} placeholder='Your Email' />
               <input type="text" name='userAddress'  onBlur={handlePurchaseValue}  placeholder='Your Address' />
               <input type="text" name="userPhone"  onBlur={handlePurchaseValue}  placeholder='Your Phone No.' />
 
                <input type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default PurchaseInfo;