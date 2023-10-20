import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'mui-image';
import image from "../../assets/images/webp/image4.webp"
import RsvpForm from '../../components/RsvpForm';


const BeOurGuest = React.forwardRef(( props, ref ) => {
  return (
    <Container>
      <Box sx={{position: 'relative', mb: 40}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 16, pt: 15}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>be our guest</Typography>
          </Grid>
          <Grid item xs={12} sx={{textAlign: "left", mb: 1}}>
            <Typography sx={{fontSize: 35, letterSpacing: 8, fontFamily: "Bodoni-Bold", opacity: .75}}>RSVP</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={7} sx={{textAlign: "left", mt: 1}}>
                <RsvpForm/>
              </Grid>
              <Grid item xs={5} sx={{display: "flex", alignItems: "flex-start", flexDirection: "column"}}>
                <Box>
                  <Image src={image} fit="scale-down" sx={{filter: "grayscale(50%)"}}/>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{mt: 35, mx: "auto"}}>
            <Typography variant="h4" sx={{fontSize: {lg: 35}, mb: 9, letterSpacing: "initial"}}>a little note on gifts</Typography>
            <Typography sx={{fontFamily: "Bodoni", fontSize: 25, letterSpacing: .25, textAlign: "center", lineHeight: 1.35, color: "secondary.main",}}>
              <Box sx={{height: "1px", width: 20, backgroundColor: "primary.main", display: "inline-block", transform: "translateY(-8px)", mr: .5, opacity: .35}}></Box>
              <Box sx={{transform: "skewX(-8deg)", display: "inline"}}>
                Your love, laughter, and company is all we wish for on our special day. However, if you wish to delight us with a gift, just surprise us in your own way.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default BeOurGuest