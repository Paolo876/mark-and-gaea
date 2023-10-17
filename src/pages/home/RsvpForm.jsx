import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';


const RsvpForm = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Box sx={{height: "110vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 16, pt: 15}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Rsvp</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default RsvpForm