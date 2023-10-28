import React, { useState } from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'mui-image';
import image from "../../assets/images/webp/image4.webp"
import RsvpForm from '../../components/RsvpForm';
import RsvpSubmissionMessage from '../../components/RsvpSubmissionMessage';
import { useInView } from 'react-intersection-observer';
import BeOurGuestHeader from '../../components/headers/BeOurGuestHeader';

const BeOurGuest = React.forwardRef(( props, ref ) => {

  const [ isSubmitted, setIsSubmitted ] = useState(false);
    
  const { ref: viewRef, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -23% 0px",
    triggerOnce: true
  });

  
  return (
    <Container>
      <Box sx={{position: 'relative', mb: {xs: 28, sm: 36, md: 38, lg: 40}, mt: {xs: 14, sm: 18, md: 23, lg:25}}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: {xs: 10, sm: 13, md: 14, lg: 16}, pt: {xs: 8, sm: 12, md: 14, lg: 15}}} ref={ref}>
            <Box ref={viewRef}></Box>

            {/* <Typography variant="h4" sx={{fontSize: {xs: 36, sm: 52, md: 58, lg: 58}}}>be our guest</Typography> */}
            <Box sx={{height: {xs: 80, sm: 100, md:120}}}>
              {inView  && <BeOurGuestHeader/> }
            </Box>
          </Grid>
          <Grid item xs={11.25} sm={12} sx={{textAlign: "left", mb: 1, mx: {xs: "auto", sm: 0}}}>
            <Typography sx={{fontSize: {xs: 26, sm: 27, md: 30, lg: 35}, letterSpacing: 8, fontFamily: "Bodoni-Bold", opacity: .85}}>RSVP</Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={11} sm={7} sx={{textAlign: "left", mt: {mb: .5, sm: 1}, pr: {sm: 6, md: 8, lg: 10}, mx: {xs: "auto", sm: 0}}}>
                {!isSubmitted && <RsvpForm setIsSubmitted={setIsSubmitted}/>}
                {isSubmitted && <RsvpSubmissionMessage setIsSubmitted={setIsSubmitted}/>}
              </Grid>
              <Grid item xs={5} sx={{display: {xs: "none", sm:"flex"}, alignItems: "flex-start", flexDirection: "column"}}>
                <Box>
                  <Image src={image} fit="scale-down" sx={{filter: "grayscale(50%)"}}/>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={8} md={8} lg={6} sx={{mt: {xs: 18, sm: 25, md: 28, lg: 35}, mx: "auto",}}>
            <Typography variant="h4" sx={{fontSize: {xs: 24, sm: 32, md: 33, lg: 35}, mb: 9, letterSpacing: "initial"}}>a little note on gifts</Typography>
              <Grid container>
                <Grid item xs={6.5} sm={12} sx={{height: "100%", my: "auto"}}>
                  <Typography 
                    sx={{
                      fontFamily: "Bodoni", 
                      fontSize: {xs: 15, sm: 22, md: 23, lg: 25}, 
                      letterSpacing: {xs: .2, sm: .25, md:.5}, 
                      textAlign: {xs: "left", sm:"center"}, 
                      lineHeight: {xs: 1.6, sm: 1.4}, 
                      color: "secondary.main",
                      pr: {xs: 2, sm: 0}
                      }}
                    >
                    <Box 
                      component="span" 
                      sx={{
                        height: "1px", 
                        width: {xs: 14, sm: 17, md: 18, lg: 20}, 
                        backgroundColor: "primary.main", 
                        display: "inline-block", 
                        transform: {xs:"translateY(-4px)", sm:"translateY(-5px)", md:"translateY(-6px)", lg:"translateY(-8px)"}, 
                        mr: .5, 
                        opacity: .35
                      }}
                    ></Box>
                    <Box component="span" sx={{transform: "skewX(-8deg)", display: "inline"}}>
                      Your love, laughter, and company is all we wish for on our special day. However, if you wish to delight us with a gift, just surprise us in your own way.
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={5.5} sx={{display: {xs: "initial", sm: "none"}}}>
                  <Box>
                    <Image src={image} fit="scale-down" sx={{filter: "grayscale(50%)"}}/>
                  </Box>
                </Grid>
              </Grid>

          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default BeOurGuest