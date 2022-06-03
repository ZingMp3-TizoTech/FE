import Cookies from 'js-cookie'
import React from 'react'
import { handelGetUser } from '../../services/User'

const  useAuth=() =>{
    let auth=false
    const role = Cookies.get('role')
     if(role=='Admin')
         (auth=true)    
     else
         (auth = false)
    return auth
}
export {
    useAuth 
}