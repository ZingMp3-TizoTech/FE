import axios from 'axios'
import Cookies from 'js-cookie'
import * as Config from '../constant/config'

const handleCreateGenre=async(zone,image)=>{
    try {
        console.log(zone);
        console.log(image);
        const token = Cookies.get('token')
        return await axios.post(`${Config.API_URL}/genre`,{zone,image},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
const handleUpdateGenre=async(id,zone,image)=>{
    try {
        console.log(zone);
        console.log(image);
        const token = Cookies.get('token')
        return await axios.put(`${Config.API_URL}/genre/${id}`,{zone,image},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
const handleRemoveGenre=async(id)=>{
    try {
        
        const token = Cookies.get('token')
        return await axios.delete(`${Config.API_URL}/genre/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
const handleGetAllGenre=async()=>{
    try {
        
        const token = Cookies.get('token')
        return await axios.get(`${Config.API_URL}/genres`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
export{handleCreateGenre,handleUpdateGenre,handleRemoveGenre,handleGetAllGenre}