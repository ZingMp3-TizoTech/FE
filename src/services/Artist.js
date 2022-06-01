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
// const handleUpdateGenre=async(id,zone,image)=>{
//     try {
//         console.log(zone);
//         console.log(image);
//         const token = Cookies.get('token')
//         return await axios.put(`${Config.API_URL}/genre/${id}`,{zone,image},{
//             headers: {
//                 'Authorization': `Bearer ${token}` 
//               }})
//     } catch (error) {
//         console.log(error);
//     }
// }
// const handleRemoveGenre=async(id)=>{
//     try {
        
//         const token = Cookies.get('token')
//         return await axios.delete(`${Config.API_URL}/genre/${id}`,{
//             headers: {
//                 'Authorization': `Bearer ${token}` 
//               }})
//     } catch (error) {
//         console.log(error);
//     }
// }
export{handleCreateArtist,
    // handleUpdateGenre,
    // handleRemoveGenre
}