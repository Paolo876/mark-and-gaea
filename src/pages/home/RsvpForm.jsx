import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'mui-image';
import image from "../../assets/images/webp/image4.webp"


const RsvpForm = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Box sx={{position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 16, pt: 15}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Rsvp</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <Typography>asdasdsad</Typography>
              </Grid>
              <Grid item xs={6}>
                <Image src={image} fit="scale-down" sx={{filter: "grayscale(50%)"}}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default RsvpForm