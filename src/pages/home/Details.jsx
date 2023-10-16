import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';

const Details = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{height: "110vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 15}}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Details</Typography>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Typography>CEREMONY</Typography>
              <Typography>Ceremony starts at 4:00 in the afternoon at the garden.</Typography>
            </Box>
            <Box>
              <Typography>Reception</Typography>
              <Typography>Reception follows after the ceremony at "The Shed" in V-Farm.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography>We request that you come in a formal attire. </Typography>
          </Grid>

        </Grid>
      </Box>
    </Container>
  )
}

export default Details