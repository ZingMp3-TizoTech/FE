import axios from 'axios'
import Cookies from 'js-cookie'
const handleGetPlaylistByUser = async (id)=>{
    try {  
        const token = Cookies.get('token')
        return await axios.get('https://suntify.herokuapp.com/playlist',{
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
        console.log(id);
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
export {handleGetPlaylistByUser, handleGetPlaylistById, handleAddSongToPlayList
}