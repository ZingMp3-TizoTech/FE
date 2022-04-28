import React, { useState } from 'react'
import './Login.css'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import {handleLoginAPI} from '../../services/User'
import { useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [hidden, setHidden] = useState(true)
    const handleHidden = () =>{
        setHidden(!hidden)
    }
    const navigate = useNavigate()
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    

    const handleLogin = async()=>{
        try {
            console.log(email, password);
            const data = await handleLoginAPI(email, password);
            console.log(data);
            let token =data.data.token;
            localStorage.setItem('token', token)                              
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
                <div className='suntify'>
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
                            <input type="email" placeholder="E-mail Address" autofocus onChange={handleEmailInput} />
                            <input type={hidden ? 'password' : 'text'} placeholder="Password" onChange={handlePasswordInput} className="password"/>
                            
                            <span 
                            className='icon-hidden'
                            onClick={handleHidden}
                            >
                                {hidden ? <AiOutlineEye/>:<AiOutlineEyeInvisible/>}
                            </span>
                            
                            <div className="remember-form">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <div className="forget-pass">
                                <a href="facebook.com">Forgot Password ?</a>
                            </div>
                            <button type="submit" 
                            onClick={(e)=>{handleLogin(e)}}
                            >LOG-IN</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
