import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({children}) => {
    const {user,admin}=useAuth();
    return user?.displayName && admin? children : <Navigate to="/home"/>
    
};

export default AdminRoute;