// react things
import * as React from 'react';

// material ui things
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



export default function Header() {

  const [menuAnchor, setMenuAnchor] = React.useState(null);


  function menuClickEvent (event) {
    console.log("click event handler activated");
    console.log(event.currentTarget);
    setMenuAnchor(event.currentTarget);
  };

  function handleMenuClose () {
    setMenuAnchor(null);
  };
  

  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton
            onClick={menuClickEvent}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true">

            <MenuIcon />
          </IconButton>
          
          <Menu id="appbar-menu"
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}>

            <MenuItem onClick={handleMenuClose}>Thing One</MenuItem>
            <MenuItem onClick={handleMenuClose}>Thing Two</MenuItem>
          </Menu>

          <Grid container sx={{ml: 4}} spacing={0}>
            
            <Grid item xs={8} md={8} lg={8}>
              <Typography 
                variant="h3" 
                
                component="div"
                sx={{ flexShrink: 1, flexgrow: 1}}>
                JOSHUA GULLEDGE
              </Typography>
            </Grid>
            
            <Grid item xs={8} md={8} lg={8}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ flexGrow: 1 }}>
                SOFTWARE ENGINEER
              </Typography>
            </Grid>
          
          </Grid>

        </Toolbar>
      </AppBar>
    </Box>
  );
}