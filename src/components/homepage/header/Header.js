import React from 'react'
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import './Header.css'
import MainMenu from "./Mainmenu"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Cookies from 'js-cookie'

export default function Header() {
  let navigate = useNavigate();
  const loggedInUser =Cookies.get('token');
 
  return (
    <div className='wrapper-navbar'>
      <div class="search-container">
        <form action="#">
          <input type="text" placeholder="Search..." name="search"/>
            <button type="submit"><BiSearchAlt style={{fontSize:'20px'}}/></button>
        </form>
      </div>
      <div
        style={{
          marginRight: '10px'
        }}
      >
        {!loggedInUser?
          <>
            <Button style={{ marginRight: '10px' }}
          onClick={(e)=>{
            navigate('/signup');
          }}
          variant="outlined" startIcon={<DriveFileRenameOutlineIcon />}>
          Register
        </Button>
        <Button variant="contained" endIcon={<ExitToAppIcon />}
        onClick={(e)=>{
          navigate('login');
        }}>
          Login
        </Button> 
          </>
        :
        <MainMenu/>
        }
        
      </div>
    </div>
  )
}
