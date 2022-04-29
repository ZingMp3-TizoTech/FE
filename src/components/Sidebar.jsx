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

const drawerWidth = 240;


export default function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <div
        style={{
          fontSize:'20px',
          display:'flex',
          alignItems:'center',
        }}
        >
          <GraphicEqRoundedIcon/>
          <p
          style={{
            fontSize:'30px',
            marginLeft:'15px',
            textShadow:'2px 2px #d7d7d7'
          }}
          >Suntify</p>
        </div>
      </Toolbar>
      <List>
        {['Personal', 'Disconver', 'Library'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text==='Personal'?<ContactsRoundedIcon/>:
              text==='Disconver'?<AlbumIcon/>:
              text==='Library'?<LibraryMusicRoundedIcon/>:
              <></>
              }
            </ListItemIcon>
            <ListItemText primary={text} />
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
    
        marginLeft:"-110px"
      }}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* <Toolbar>
          <IconButton
            
          >  
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>

        </Toolbar> */}
        
        {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer> */}
        
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
    // </Box>
  );
}