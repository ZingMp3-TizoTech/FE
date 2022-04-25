import React from 'react'
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { BiSearchAlt } from 'react-icons/bi';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export default function Header() {
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
        <Button style={{ marginRight: '10px' }}
          variant="outlined" startIcon={<DriveFileRenameOutlineIcon />}>
          Register
        </Button>
        <Button variant="contained" endIcon={<ExitToAppIcon />}>
          Login
        </Button>
      </div>
    </div>
  )
}
