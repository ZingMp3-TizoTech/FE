import axios from 'axios'

import * as Config from '../constant/config'
const handleSearchByKeyword = async (key)=>{
    try {
        return axios.post(`${Config.API_URL}/search`,{key},{
           
        })
    } catch (error) {
        console.log(error)
    }
}
export {handleSearchByKeyword}