import axios from 'axios'
import Cookies from 'js-cookie'

import * as Config from '../constant/config'
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
export {handleGetPlaylistByUser
}