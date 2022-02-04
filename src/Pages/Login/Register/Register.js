import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Register.css'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
     const [userInfo,setUserInfo]=useState({});
   const {registerNewUser,signInUsingGoogle}=useAuth();
   const location=useLocation();
   const navigate=useNavigate();
  
    const handleUserInfo=e=>{
        const fieldName=e.target.name;
        const value=e.target.value;
        const newUserInfo={...userInfo}
         newUserInfo[fieldName]=value;
         setUserInfo(newUserInfo);
         
    }

    const handleRegistration=e=>{
        console.log(userInfo);
        if(userInfo.userPassword !== userInfo.userPassword2){
            alert("password didn't match!")
            return;
        }
            registerNewUser(userInfo.userName,userInfo.userEmail,userInfo.userPassword,location,navigate)
        
       
        e.preventDefault();
    }
    return (
        <div>
            <Header/>
           <h3 className='mt-5 pt-5  text-center'>Please Register</h3> 
           <form onSubmit={handleRegistration}>
               <input type="text" onBlur={handleUserInfo} name='userName' placeholder='Your Name' />
               <input type="email"  onBlur={handleUserInfo} name='userEmail' placeholder='Your Email' />
               <input type="password" onBlur={handleUserInfo} name='userPassword' placeholder='Your Password'/>
               <input type="password"  onBlur={handleUserInfo} name='userPassword2' placeholder='Re-Enter Your Password'/>
                <input type="submit" value="Register" />
           </form>
           <button onClick={signInUsingGoogle} className='d-block mx-auto'><FontAwesomeIcon icon={faGoogle}  /> Google</button>
           <Footer/>
        </div>
    );
};

export default Register;