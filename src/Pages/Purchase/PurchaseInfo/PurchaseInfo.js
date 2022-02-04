import React, { useState } from 'react';
import Header from '../../Shared/Header/Header';
import {useNavigate} from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
const PurchaseInfo = () => {
    const [purchaseInfo,setPurchaseInfo]=useState(null);
    const {user,model}=useAuth();
    const navigate=useNavigate();

    const handlePurchaseValue=e=>{
      const name=e.target.name;
      const value=e.target.value;
      const newPurchaseInfo={...purchaseInfo}
      newPurchaseInfo[name]=value;
      setPurchaseInfo(newPurchaseInfo)
    }

    const handlePurchaseInfo=(e)=>{
    const newPurchase= {...purchaseInfo,bookedProduct:model,userName:user.displayName,userEmail:user.email}
      console.log(newPurchase);
      fetch('https://frozen-river-22304.herokuapp.com/orders',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newPurchase)
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
               <input type="text" name="bookedProduct" onBlur={handlePurchaseValue} value={model}   placeholder='Booked Product' />
               <input type="text" name="userName" onBlur={handlePurchaseValue} value={user?.displayName} placeholder='Your Name' />
               <input type="email" name='userEmail' onBlur={handlePurchaseValue} value={user?.email} placeholder='Your Email' />
               <input type="text" name='userAddress'  onBlur={handlePurchaseValue}  placeholder='Your Address' />
               <input type="text" name="userPhone"  onBlur={handlePurchaseValue}  placeholder='Your Phone No.' />
 
                <input type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default PurchaseInfo;