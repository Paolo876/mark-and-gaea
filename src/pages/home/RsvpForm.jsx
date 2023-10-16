import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';


const RsvpForm = () => {
  return (
    <Container>
      <Box sx={{height: "110vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 15}}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>RSVP</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default RsvpForm