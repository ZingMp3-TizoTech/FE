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
        return await axios.get(`${Config.API_URL}/song/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}

const updateRateAndListen = async (id,rates, listens)=>{
    try {
        // console.log(rates);
        // console.log(listens);
        return await axios.put(`https://suntify.herokuapp.com/song/like/${id}`, {rates, listens})   
    } catch (error) {
        console.log(error)
    }
}

export {handleGetSongBtArtistAPI, handleGetAllSongAPI,handleGetSongById, updateRateAndListen}