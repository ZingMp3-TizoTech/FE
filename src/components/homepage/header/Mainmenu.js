import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import MyVerticallyCenteredModal from '../../account/ChangePassword';
import ChangePassword from '../../account/ChangePassword';
import { Modal, Button } from 'react-bootstrap';

import { Input } from '@mui/material';

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { handelChangePassWord } from '../../../services/user1';
import { toast, ToastContainer } from 'react-toastify';
const StyledMenu = styled((props) => (

  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



export default function MainMenu() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hidden, setHidden] = useState(true)
  const [pwOld,setPwOld]=useState('')
  const [pwNew,setPwNew]=useState('')
  const handleHidden = () => {
    setHidden(!hidden)
  }
  const hadleLogout = () => {
    Cookies.remove('token')
    navigate("/login")
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelGetOldPW =(e)=>{
    console.log(e.target.value);
    setPwOld(e.target.value)
  }
  const handelGetNewPW =(e)=>{
    console.log(e.target.value);
    setPwNew(e.target.value)
  }
  const  ChangePassWord= async()=>{
      const change= await handelChangePassWord(pwOld,pwNew)
      if(change){
        toast.success('Success!')
        Cookies.remove('token')
        navigate("/login")
      }
      if(!change) {
        toast.error('False!')
        navigate("/")
      }
  }
  return (
    <div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",

          }}>
            <ToastContainer/>
            <div style={{ width: "400px" }}>
              <label style={{
                fontSize: "30px"
              }}>Old password</label>
              <input  onChange={(e)=>handelGetOldPW(e)} style={{
                height: "40px",
                width: "300px"
              }} type={hidden ? 'text' : 'password'} placeholder='Old password' />
                <span className='icon-hidden' onClick={handleHidden}>
          {hidden ? <AiOutlineEye style={{width:"30px",height:"30px"}}/>:<AiOutlineEyeInvisible style={{width:"30px",height:"30px"}}/>}
         </span>
            </div>

            <div style={{ width: "400px" }}>
              <label style={{
                fontSize: "30px"
              }}>New password</label>
             <input onChange={(e)=>handelGetNewPW(e)} style={{
                height: "40px",
                width: "300px"
              }} type={hidden ? 'text' : 'password'} placeholder='New password' />
 <span className='icon-hidden' onClick={handleHidden}>
          {hidden ? <AiOutlineEye style={{width:"30px",height:"30px"}}/>:<AiOutlineEyeInvisible style={{width:"30px",height:"30px"}}/>}
         </span>
            </div>
          </div>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={ChangePassWord}>Change</Button>
        </Modal.Footer>
      </Modal>
      <button
        style={{
          width: '90px',
          height: '50px',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: '#FFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png" />
        </Stack>
        <span style={{ marginLeft: "6px", color: "rgb(89 85 85)" }}>
          <KeyboardArrowDownIcon />
        </span>

      </button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <div onClick={handleShow} >
            <EditIcon />
            Change password
          </div>

        </MenuItem>
        <MenuItem onClick={() => { handleClose(); hadleLogout(); }} disableRipple>
          <LogoutIcon />
          Logout
        </MenuItem >

      </StyledMenu>
    </div>
  );
}