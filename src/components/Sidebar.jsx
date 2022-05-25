import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AlbumIcon from '@mui/icons-material/Album';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { style } from '@mui/system';

const drawerWidth = 240;
export default function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const token = Cookies.get('token');


  let list = ['Personal', 'Discover'];
  if (token) {
    list.push('Library')
  }
  const drawer = (
    <div style={{
      overflowY: "clip",
      minHeight:'100%'
    }}>

      <Toolbar style={{
        backgroundColor: '#48589c',
       
      }}>
        <div onClick={(e) => navigate('/')}

          style={{
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
          
          }}
        >
          <GraphicEqRoundedIcon style={{ fontSize: "50px" }} />
          <p
            style={{
              fontSize: '30px',
              marginLeft: '15px',
              textShadow: '2px 2px #d7d7d7',
            
            }}

          >Suntify</p>
        </div>
      </Toolbar>

      <List style={{
        backgroundColor: '#48589c',
        minHeight: '100%',
        color:'black'
      }}>
        {list.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon onClick={(e) => navigate(`/${text}`)}>
              {
                text === 'Personal' ? <ContactsRoundedIcon /> :
                  text === 'Discover' ? <AlbumIcon /> :
                    text === 'Library' ? <LibraryMusicRoundedIcon /> :
                      <></>
              }
            </ListItemIcon>

            <ListItemText primary={text} onClick={(e) => navigate(`/${text}`)} />
          </ListItem>

        ))}

      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (


    // <Box sx={{ 
    //   display: 'flex',
    //   boxShadow:'-6px 1px 12px 6px #888888' }}
    // >

    <Box
      style={{
       
        marginLeft: "-110px"
      }}
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >




      <Drawer

        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}

      </Drawer>

    </Box>

  );
}