// react things
import * as React from 'react';

// components
import Header from './Header';

// material ui things
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';


export default function Home() {
  

  return (
      <div>
        <Header />
        
        <Grid container justifyContent="center">
           <Grid item>
                <Typography variant="h3" m={3}>
                    Welcome to my BIO
                </Typography>
           </Grid>
        </Grid>

        <Grid container justifyContent="center">
           <Grid item>
                <Typography variant="p" m={3}>
                    Let me tell you a short story...
                </Typography>
           </Grid>
        </Grid>

      </div>
  );
}