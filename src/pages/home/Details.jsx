import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';

const Details = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{height: "100vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{fontSize: 45, letterSpacing: 8}}>DETAILS</Typography>
          </Grid>
          <Grid>
            
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Details