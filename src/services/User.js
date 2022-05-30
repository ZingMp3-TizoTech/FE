import axios from "axios";
import * as Config from '../constant/config'
import Cookies from 'js-cookie'
const handleLoginAPI = (email, password) => {
    try {

        return axios.post(`${Config.API_URL}/login`, { email, password })
    } catch (error) {
        console.log(error);
    }
}
const handelGetUser = async () => {
    try {
        let token =Cookies.get('token');
     
        return await  axios.get(`${Config.API_URL}/user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const handleSignUpAPI = (email, password) => {
    try {
        const role = "User";

        return axios.post(`${Config.API_URL}/signup`, { email, password, role })

    } catch (error) {
        console.log(error);
    }
}
const handleGetUserIdAPI = async () => {
    try {
        let token =Cookies.get('token');
        return axios.get(`${Config.API_URL}/user/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const handelChangePassWord = async (oldPassword, newPassword) => {
    try {
        let token =Cookies.get('token');
       
        return await axios.put(`${Config.API_URL}/change-password`, { oldPassword, newPassword }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const handelLikeSong = async (liked) => {
    try {
        let token =Cookies.get('token');
       
        return await axios.put(`${Config.API_URL}/user/like`, { liked }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const handelUnLikeSong = async (liked) => {
    try {
        let token =Cookies.get('token');
      
        return await axios.put(`${Config.API_URL}/user/unlike`, { liked }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export {
    handleLoginAPI,
    handelGetUser,
    handleSignUpAPI,
    handleGetUserIdAPI,
    handelChangePassWord,
    handelLikeSong,
    handelUnLikeSong
}