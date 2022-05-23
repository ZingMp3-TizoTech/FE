import React, { useState } from 'react'
import './Login.css'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import {handleLoginAPI} from '../../services/User'
import { useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [messagePassWord, setMessagePassWord] = useState("")
    const [hidden, setHidden] = useState(true)
    const handleHidden = () =>{
        setHidden(!hidden)
    }
    const navigate = useNavigate()
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length == 0){
            setMessage("Email cannot be blank!")
        } else {
            setMessage("")
            // if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.e.target.value){
                // setMessage("Invalid email!")
            // }
        } 
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
        if( e.target.value.length<=6){
            setMessagePassWord("Password must be 6 characters!")
        }
        else{
            setMessagePassWord("")
        }
    }
 
    const handleLogin = async()=>{
        try {
            // console.log(email, password);
            const data = await handleLoginAPI(email, password);
            console.log(data);
            let token= Cookies.set("token",data.data.token)                                   
            if(token){
               
                toast.success("Login success!")
                navigate('/')
            } 
        } catch (error) {
            toast.error("Login failed")
            console.log(error);
         
        }
    }

    return (
        <div className="parent clearfix">
            <div className="bg-illustration">
                <div className='suntify'
                onClick={()=>(navigate('/'))}
                >
                    <GraphicEqRoundedIcon style={{ fontSize: '55px', marginRight: '15px' }} />
                    <p>Suntify</p>
                </div>
                <div className="burger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className="login">
                <div className="container">
                    <h1>Login to access to<br />your account</h1>

                    <div className="login-form">
                        <div className='form'>

                            <input type="email" 
                            placeholder="E-mail Address" 
                            autofocus 
                            onChange={handleEmailInput} />
                            <a style={{marginLeft:'25px', color:'red', height:'20px'}}>{message}</a>
                                {/* {email==""?<p style={{marginLeft:'25px', color:'red'}}> *Please enter email </p>:<></>} */}
                            

                            <input type={hidden ? 'password' : 'text'} placeholder="Password" onChange={handlePasswordInput} className="password"/>
                            <a style={{marginLeft:'25px', color:'red',height:'20px'}}>{messagePassWord}</a>
                            <span 
                            className='icon-hidden'
                            onClick={handleHidden}
                            >
                                {hidden ? <AiOutlineEye/>:<AiOutlineEyeInvisible/>}
                            </span>
                            
                            {/* <div className="remember-form">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div> */}
                            <div className="forget-pass">
                                <a href="facebook.com">Forgot Password ?</a>
                            </div>
                            <button type="submit" 
                            style={{marginTop:'40px'}}
                            onClick={(e)=>{handleLogin(e)}}
                            >Login</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
