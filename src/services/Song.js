import axios from 'axios'
import * as Config from '../constant/config'
import Cookies from 'js-cookie'
const handleGetSongBtArtistAPI = async ()=>{
    try {
        let token =Cookies.get('token');
        return axios.get(`${Config.API_URL}/songs/filter/artist/6256441b9ab05531f28dc74c`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleGetAllSongAPI = async ()=>{
    try {
           let token =Cookies.get('token');
        return axios.get(`${Config.API_URL}/songs`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleGetSongById = async (id)=>{
    try {
        let token =Cookies.get('token');
        return axios.get(`${Config.API_URL}/song/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleUpdateSong = async (id,name,url,artist,image,album,genre,rates,listens)=>{
    try {
        let token =Cookies.get('token');
        return axios.put(`${Config.API_URL}/song/${id}`,{name,url,artist,image,album,genre,rates,listens},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
export {handleGetSongBtArtistAPI, handleGetAllSongAPI,handleGetSongById,handleUpdateSong}