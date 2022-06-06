import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AlbumIcon from '@mui/icons-material/Album';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import { grey } from '@mui/material/colors'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import './sidebar.scss'
const drawerWidth = 240;
export default function   Sidebar(props) {
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

      overflow: "hidden",
      minHeight: '100%',
      maxHeight:'90%'


    }}>

      <Toolbar style={{
        backgroundColor: '#334155',

      }}>
        <div onClick={(e) => navigate('/')}

          style={{
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',

          }}
        >

          <div style={{ marginTop: '30px' }} onClick={() => navigate('/')}>

            <h1 style={{
              maxWidth: 'fit-content'
            }}>
              <span>Suntify</span>
              <span>Suntify</span>
            </h1>
            <h2>Music and chill</h2></div>
        </div>

      </Toolbar>

      <List style={{
        backgroundColor: '#334155',
        minHeight: '100%',
        color: 'black'
      }}>
        {list.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon onClick={(e) => navigate(`/${text}`)}>
              {
                text === 'Personal' ? <ContactsRoundedIcon sx={{ color: grey[50] }}  /> :
                  text === 'Discover' ? <AlbumIcon sx={{ color: grey[50] }} /> :
                    text === 'Library' ? <LibraryMusicRoundedIcon sx={{ color: grey[50] }} /> :
                      <></>
              }
            </ListItemIcon>
            <ListItemText primary={text} style={{ color: grey[50] }}  onClick={(e) => navigate(`/${text.toLowerCase()}`)} />
          </ListItem>
        ))}
      </List>

    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
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