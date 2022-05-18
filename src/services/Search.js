import axios from 'axios'

const handleSearchByKeyword = async (key)=>{
    try {
        return axios.post('http://localhost:5000/search',{key},{
           
        })
    } catch (error) {
        console.log(error)
    }
}
export {handleSearchByKeyword}