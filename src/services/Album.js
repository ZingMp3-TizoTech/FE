import axios from 'axios'
const handleGetAllAlbumAPI = async ()=>{
    try {
        var token = await localStorage.getItem('token')
        return axios.get('https://suntify.herokuapp.com/albums',{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleCreateAlbumAPI = async (params,data)=> {
    try {
        var token = await localStorage.getItem('token')
        // var token = await localStorage.getItem('token')
            // console.log(token);
        return await axios.post('https://suntify.herokuapp.com/album/', data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}
const handleUpdateAlbumAPI = async (id,data)=>{
    try {
         var token = await localStorage.getItem('token')
        return await axios.put(`https://suntify.herokuapp.com/album/${id}`, data,{
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
        
        return await axios.get('http://localhost:5000/album/', { params: {
            id
        }})      
    } catch (error) {
        console.log(error)
    }
}
export {handleCreateAlbumAPI, 
        handleGetAllAlbumAPI, 
        handleUpdateAlbumAPI,
        handleGetAlbumById
    }