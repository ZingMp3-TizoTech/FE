import axios from 'axios'

const handleSearchByKeyword = async (key)=>{
    try {
        return axios.post('https://suntify.herokuapp.com/search',{key},{
           
        })
    } catch (error) {
        console.log(error)
    }
}
export {handleSearchByKeyword}