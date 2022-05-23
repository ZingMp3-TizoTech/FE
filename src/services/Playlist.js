import axios from 'axios'
import Cookies from 'js-cookie'
const handleGetPlaylistByUser = async (id)=>{
    try {  
        const token = Cookies.get('token')
        return await axios.get('http://localhost:5000/playlist',{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

    } catch (error) {
        console.log(error)
    }
}
export {handleGetPlaylistByUser
}