import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
    const [loginInfo,setLoginInfo]=useState(null);
   const {logInUser,signInUsingGoogle}=useAuth();
    const handleUserLoginInfo=(e)=>{
      const fieldName=e.target.name;
      const value=e.target.value;
      const newUserInfo={...loginInfo}
      newUserInfo[fieldName]=value
      setLoginInfo(newUserInfo);
    }
  
    const handleLoginSubmit=e=>{
      logInUser(loginInfo.email,loginInfo.password)
      e.preventDefault();
    }

    return (
        
              <div>
            <Header/>
           <h3 className='mt-5 pt-5 mb-3 text-center'>Please LogIn</h3> 
           <form onSubmit={handleLoginSubmit}>
               <input onBlur={handleUserLoginInfo} name="email" type="email" placeholder='Your Email' />
               <input onBlur={handleUserLoginInfo} name="password" type="password" placeholder='Your Password'/>
                <input type="submit" value="Register" />
           </form>
           <button className='d-block mx-auto' onClick={signInUsingGoogle}><FontAwesomeIcon icon={faGoogle}  /> Google</button>
           <Footer/>
        </div>
     
    );
};

export default Login;