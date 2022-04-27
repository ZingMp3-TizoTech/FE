import React from 'react'
import './Login.css'
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';


export default function Register() {
    return (
        <div className="parent clearfix">
            <div className="bg-illustration">
                {/* <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo"/> */}

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
                    <h1>Register your account</h1>

                    <div className="login-form">
                        <form action="#" method='post'>
                            <input type="email" placeholder="E-mail Address" autofocus/>
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <button type="submit">SIGN-UP</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
