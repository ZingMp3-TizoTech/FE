import axios from 'axios'
import Cookies from 'js-cookie'
import * as Config from '../constant/config'

const handleCreatePlaylist=async(name,date_create,song)=>{
    try {
        const token = Cookies.get('token')
        return await axios.post(`${Config.API_URL}/playlist`,{name,date_create,song},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
const handleDeletePlaylist = async (id)=>{
    try {  
        const token = Cookies.get('token')

        return await axios.delete(`${Config.API_URL}/playlist/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  
    } catch (error) {
        console.log(error)
    }
}

const handleGetPlaylistByUser = async ()=>{
    try {  
        const token = Cookies.get('token')
        return await axios.get(`${Config.API_URL}/playlist`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  
    } catch (error) {
        console.log(error)
    }
}

const handleGetPlaylistById = async (id)=>{
    try {  
        
        const token = Cookies.get('token')
        return await axios.get(`https://suntify.herokuapp.com/playlist/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  
    } catch (error) {
        console.log(error)
    }
}


const handleAddSongToPlayList = async (id, song)=>{
   
        
    try {
        console.log('song:',song);
        const token = Cookies.get('token')
        return await axios.put(`https://suntify.herokuapp.com/playlist/add/${id}`,{song},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

    } catch (error) {
        console.log(error)
    }
    
}
const handleDeleteSongToPlayList = async (id, song)=>{
   
        
    try {
        console.log('song:',song);
        const token = Cookies.get('token')
        return await axios.put(`https://suntify.herokuapp.com/playlist/remove/${id}`,{song},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

    } catch (error) {
        console.log(error)
    }
    
}

export {
    handleCreatePlaylist,
    handleDeletePlaylist,
    handleGetPlaylistByUser,
     handleGetPlaylistById,
      handleAddSongToPlayList,
      handleDeleteSongToPlayList,
}