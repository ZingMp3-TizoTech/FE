import axios from 'axios'

const handleGetSongBtArtistAPI = async ()=>{
    try {
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
        return axios.get(`${Config.API_URL}/songs`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
export {handleGetSongBtArtistAPI, handleGetAllSongAPI}