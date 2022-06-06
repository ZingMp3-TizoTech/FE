import axios from 'axios'
import Cookies from 'js-cookie'
import * as Config from '../constant/config'

const handleCreateArtist=async(name,gender,age,genre,image)=>{
    try {
       
      
        const token = Cookies.get('token')
        return await axios.post(`${Config.API_URL}/artist`,{name,gender,age,genre,image},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
const handleUpdateArtist=async(id,name,gender,image,age,genre)=>{
    try {
       console.log(id,name,gender,image,age,genre);
        const token = Cookies.get('token')
        return await axios.put(`${Config.API_URL}/artist/${id}`,{id,name,gender,image,age,genre},{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
 const handleRemoveArtist=async(id)=>{
     try {
        
        const token = Cookies.get('token')
         return await axios.delete(`${Config.API_URL}/artist/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }})
    } catch (error) {
        console.log(error);
    }
}
export{handleCreateArtist,
     handleUpdateArtist,
     handleRemoveArtist
}