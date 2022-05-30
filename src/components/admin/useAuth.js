import React from 'react'
import { handelGetUser } from '../../services/User'
export default async function useAuth() {
    const log =await handelGetUser()
    const role=log.data.data[0].role.name;  
    let auth=false
     if(role=='Admin')
         (auth=true)    
     else
         (auth = false)
    return auth
}