import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
     const {logOut,admin}=useAuth()
    
    return (
        <div className='dashboard-container'>
             <div className="bg-dark text-white" style={{height:'100vh'}}>
                  <h2>Bike4Sell</h2>
                  <Link to='/' className="d-flex my-3 text-white justify-content-center" >Home</Link>
                  <Link to='/dashboard/orders' className="d-flex my-3 text-white justify-content-center" >My Orders</Link>
                  <Link to='/dashboard/payments' className="d-flex my-3 text-white justify-content-center" >Payments</Link>
                  <Link to='/dashboard/reviews' className="d-flex my-3 text-white justify-content-center" >Review</Link>
                { admin && <>
                    <Link to='/dashboard/makeadmin' className="d-flex my-3 text-white justify-content-center" >Make Admin</Link>
                  <Link to='/dashboard/manage-orders' className="d-flex my-3 text-white justify-content-center" >Manage All Orders</Link>
                  <Link to='/dashboard/addproducts' className="d-flex my-3 text-white justify-content-center" >Add Product</Link>
                  <Link to='/dashboard/manageproducts' className="d-flex my-3 text-white justify-content-center" >Manage Product</Link>
                </>}
                  <Link to='/' onClick={logOut} className="d-flex my-3 text-white justify-content-center" >Log Out</Link>
                  
             </div>
             <div>
                  <Outlet/>
             </div>
        </div>
    );
};

export default Dashboard;