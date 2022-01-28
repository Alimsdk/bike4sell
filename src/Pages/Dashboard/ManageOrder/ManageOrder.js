import React from 'react';

const ManageOrder = ({perorder}) => {
    console.log(perorder);
    const {_id,bookedProduct,userName,userEmail,userAddress}=perorder;
    return (
        <div id="order-card">
            <p>Product Name : {bookedProduct}</p>
            <p>Booked By : {userName}</p>
            <p>User Email : {userEmail}</p>
            <p>Address : {userAddress}</p>
        </div>
    );
};

export default ManageOrder;