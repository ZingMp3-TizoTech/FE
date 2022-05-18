import React, { useState } from 'react'
import './Login.css'
import './signup.css'
import { Form, Input } from 'antd';
import 'antd/dist/antd.css'
import 'animate.css';
import { Button as Btn } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { handleSignUpAPI } from '../../services/User';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

function Register() {
    const navigate = useNavigate();
    const [validate, setValidate] = useState(false)
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pw1, setPw1] = useState('');
    const [error, setError] = useState('');
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPW = (e) => {
        setPw(e.target.value);
    }
    const getPW1 = (e) => {
        setPw1(e.target.value);
    }
    async function signup() {
        if (pw == pw1) {
            setValidate(true)
        }
        else {
            setValidate(false)
        }

        if (validate && pw.length >= 6) {
            console.log(email);
            const acc = await handleSignUpAPI(email, pw);        
            console.log(acc.status);
            if (acc.status == 200) {
               
                navigate("/login");
            }
              if (acc.status == 205){
                 setError('Email already exists, please try again!');               
             }
        }
        else {
           
            console.log("log lỗi");
        }

    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div  >
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div className='bg'></div>
                <div className='form-signup animate__animated animate__slideInDown'     >
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        style={{
                            marginTop: "40px",
                            marginLeft: "40px"
                        }}
                    >   <a style={{
                        fontSize: "50px",
                        color: "#e6cf00",
                        display: "flex",
                        justifyContent: "center",
                        textShadow: "2px 2px #d7d7d7",
                        marginBottom: "20px"
                    }}>Sign up <b style={{
                        color: "#7005b3"
                    }}>and</b> stay free</a>
                        <Form.Item
                            style={{

                                width: "420px",
                                paddingLeft: "50px"
                            }}
                            label="Username"
                            name="username"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input id='email' onChange={(e) => getEmail(e)} type={'email'} />
                            <a style={{
                                color:"red",
                                fontSize:"15px"
                            }}>{error}</a>
                        </Form.Item>

                        <Form.Item
                            style={{
                                width: "420px",
                                paddingLeft: "50px"
                            }}
                            label="Password"
                            name="password"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    min: 6,
                                    message: 'Password must be 6 characters!',
                                },
                            ]}
                        >
                            <Input.Password onChange={(e) => getPW(e)} id='password' type={"password"}
                            />
                        </Form.Item>
                        <Form.Item
                            style={{

                                width: "425px",

                            }}
                            label="Confirm Password"
                            name="cfpassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    min: 6,
                                    message: 'Password must be 6 characters!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return (setValidate(true), Promise.resolve())
                                        }
                                        return (

                                            Promise.reject('Confirm password not match!'))
                                            ;
                                    },
                                }),
                            ]}
                        >
                            <Input.Password id="cfpassword" onChange={(e) => getPW1(e)} type={"password"}
                            />
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}

                        >
                            <Btn variant="primary" style={{
                                width: "150px",
                                height: "35px",
                                marginBottom: "10px"
                            }} onClick={signup}>

                                Sign Up
                            </Btn>

                            <div style={{
                                marginLeft: "-50px"
                            }}>
                                <div style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                                    If you have account, 
                                     <a style={{color:"blue",textDecoration:'none'}}  onClick={(e)=>{navigate('/login')}}> click here!</a></div>

                            </div>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Register