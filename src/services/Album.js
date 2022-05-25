import axios from 'axios'
import * as Config from '../constant/config'
const handleGetAllAlbumAPI = async ()=>{
    try {
        var token = await localStorage.getItem('token')
        return axios.get(`${Config.API_URL}/albums`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleCreateAlbumAPI = async (params,data)=> {
    try {
        var token = await localStorage.getItem('token')
        // var token = await localStorage.getItem('token')
            // console.log(token);
        return await axios.post(`${Config.API_URL}/album/`, data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}
const handleUpdateAlbumAPI = async (id,data)=>{
    try {
         var token = await localStorage.getItem('token')
        return await axios.put(`${Config.API_URL}/album/${id}`, data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}
const handleGetAlbumById = async (id)=>{
    try {  

        return await axios.get(`${Config.API_URL}/album/${id}`)      

    } catch (error) {
        console.log(error)
    }
}
export {handleCreateAlbumAPI, 
        handleGetAllAlbumAPI, 
        handleUpdateAlbumAPI,
        handleGetAlbumById
    }