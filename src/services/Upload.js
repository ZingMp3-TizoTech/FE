import axios from "axios";
import * as Config from '../constant/config'
import Cookies from 'js-cookie'
const handleUpload = async (data) => {
    try {
        return await axios.post(`${Config.API_URL}/upload`,  data )
    } catch (error) {
        console.log(error);
    }
}
export{handleUpload}