import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import Orders from "./Pages/Dashboard/Orders/Orders";
import Payments from "./Pages/Dashboard/Payments.js/Payments";
import Reviews from "./Pages/Dashboard/Reviews/Reviews";
import Explore from "./Pages/Explore/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
import PurchaseInfo from "./Pages/Purchase/PurchaseInfo/PurchaseInfo";

function App() {
  return (
    <AuthProvider>
       <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='purchase/:id' element={
        <PrivateRoute><Purchase/></PrivateRoute>
      }/>
      <Route path='purchaseinfo' element={
        <PrivateRoute><PurchaseInfo/></PrivateRoute>
      }/>

      <Route path='dashboard/*' element={
        <PrivateRoute><Dashboard/></PrivateRoute>
      }>
        <Route path='orders' element={<PrivateRoute><Orders/></PrivateRoute>}/>
        <Route path='payments' element={<PrivateRoute><Payments/></PrivateRoute>}/>
        <Route path='reviews' element={<PrivateRoute><Reviews/></PrivateRoute>}/>
        <Route path='makeadmin' element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
        <Route path='manage-orders' element={<AdminRoute><ManageOrders/></AdminRoute>}/>

      </Route>
      
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
