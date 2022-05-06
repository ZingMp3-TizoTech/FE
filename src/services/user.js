import axios from "axios";
import * as Config from '../constant/config'
const handleLoginAPI = (email, password)=>{
    try {
       
        return axios.post(`${Config.API_URL}/login`,{email, password})
    } catch (error) {
        console.log(error);
    }
}

const handleSignUpAPI = (email, password)=>{
    try {
        const role="User";
        return axios.post(`${Config.API_URL}/signup`,{email, password, role})
    } catch (error) {
        console.log(error);
    }
}
const handleGetUserIdAPI = async ()=>{
    try {
        let token = await localStorage.getItem('token')
        return axios.get(`${Config.API_URL}/user/profile`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
export{handleLoginAPI, handleSignUpAPI, handleGetUserIdAPI}