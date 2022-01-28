import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user}=useAuth();
    return user?.displayName? children : <Navigate to="/login"/>
    
};

export default PrivateRoute;