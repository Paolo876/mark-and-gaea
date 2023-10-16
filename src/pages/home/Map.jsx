import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';

const Map = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{height: "110vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 15}}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Map</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Map