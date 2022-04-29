import axios from 'axios'
const handleLoginAPI = (email, password)=>{
    try {
        return axios.post('https://suntify.herokuapp.com/login', {email, password})
    } catch (error) {
        console.log(error)
    }
}
const handleSignUpAPI = (email, password)=>{
    try {
        const role="User";
        return axios.post('https://suntify.herokuapp.com/signup', {email, password,role})
    } catch (error) {
        console.log(error)
    }
}
export {
    handleLoginAPI ,handleSignUpAPI
}