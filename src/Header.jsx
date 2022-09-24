import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid";


export default function Header() {

  function menuClickEvent () {
    console.log("click event handler activated");
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
            aria-label="menu">

            <MenuIcon />
          </IconButton>
          
          <Grid container sx={{ml: 4}} spacing={0}>
            
            <Grid item xs={8} md={8} lg={8}>
              <Typography 
                variant="h3" 
                component="div"
                sx={{ flexGrow: 1 }}>
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