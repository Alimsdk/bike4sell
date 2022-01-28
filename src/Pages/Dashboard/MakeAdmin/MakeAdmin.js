import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const handleEmail=e=>setEmail(e.target.value);
    const handleAdminBtn=()=>{
        const user={email}
         fetch('http://localhost:5000/users/admin',{
             method:'PUT',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify(user)
         }).then(res=>res.json())
         .then(data=>{console.log(data)
        alert('Admin added')
    })
    }
    return (
        <div className="mt-5 ms-5">
            <h3 className="mb-3">Make New Admin</h3>
            <input type="email" placeholder='Make admin email' onBlur={handleEmail}/>
            <button onClick={handleAdminBtn}>Add</button>
        </div>
    );
};

export default MakeAdmin;