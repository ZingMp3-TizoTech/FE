import useAuth from'./useAuth'
import { Navigate } from "react-router-dom";
import { handelGetUser } from '../../services/User';

  const PrivateRoute= async({children}) =>{
    //const auth = await useAuth();
    const log =await handelGetUser()
    const role=log.data.data[0].role.name;  
    let auth=false
     if(role=='Admin')
          auth=true    
     else auth = false
    return  auth ?  children :  <Navigate to="/"/>
  }
  export default PrivateRoute