import axios from 'axios'
import * as Config from '../constant/config'
import Cookies from 'js-cookie'
const handleGetAllAlbumAPI = async ()=>{
    try {
        const token = Cookies.get('token')
        return axios.get(`${Config.API_URL}/albums`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleCreateAlbum = async (name,created,artist,songs)=> {
    try {
        console.log(name,created,artist,songs);
        const token = Cookies.get('token')
        return await axios.post(`${Config.API_URL}/album/`, {name,created,artist,songs},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}
const handleUpdateAlbumAPI = async (id,name,date_create,artist)=>{
    try {
        const token = Cookies.get('token')
        return await axios.put(`${Config.API_URL}/album/${id}`, {name,date_create,artist},{
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
const handleRemoveSongFromAlbum = async (id,song)=>{
    try {
        return await axios.put(`${Config.API_URL}/album/remove/${id}`,{song}) 
    } catch (error) {
        console.log(error);
    }
}
const handleAddSongToAlbum = async (id,song)=>{
    try {
        return await axios.put(`${Config.API_URL}/album/add/${id}`,{song}) 
    } catch (error) {
        console.log(error);
    }
}

const handleRemoveAlbum=async(id)=>{
    try {
        
        const token = Cookies.get('token')
        return await axios.delete(`${Config.API_URL}/album/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
export {handleCreateAlbum, 
        handleGetAllAlbumAPI, 
        handleUpdateAlbumAPI,
        handleGetAlbumById,
        handleRemoveSongFromAlbum,
        handleAddSongToAlbum,
        handleRemoveAlbum
        
    }