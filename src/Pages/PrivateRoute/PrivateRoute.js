import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const location=useLocation();
    const {user,isLoading}=useAuth();
    console.log(isLoading);
    if(isLoading){
      return <Spinner style={{display:'flex',margin:'200px auto'}} animation="border" />
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{ from: location }}/>

    
};

export default PrivateRoute;