import { useAuth } from './useAuth'
import { Navigate } from "react-router-dom";
import { handelGetUser } from '../../services/User';

import { Routes, Route } from "react-router-dom";
const PrivateRoute =  ({ children}) => {
  const auth =  useAuth();
  //const log = await handelGetUser()
  //const role = log.data.data[0].role.name;
  //let auth = false
  //if (role == 'Admin')
  //  auth = true
  //else auth = false
  return  auth ?  children :  <Navigate to="/"/>
  // return  <Route path={rest}  element={auth ? (children) : (<Navigate to="/" />)}>
  // </Route>


}
export default PrivateRoute