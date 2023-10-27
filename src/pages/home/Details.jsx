import React from 'react'
import { Box, Typography, Container, Grid, Fade } from '@mui/material';
import Image from 'mui-image';
import palette from "../../assets/images/palette.svg"
import shedImage from "../../assets/images/shed_sketch.png"
import { useInView } from 'react-intersection-observer';
import DetailsHeader from '../../components/headers/DetailsHeader';

const headerStyles = {
  fontFamily: "Bodoni-Bold",
  fontSize: {xs:  19, sm: 21, md: 22, lg: 24},
  letterSpacing: {xs: 3.5, sm:4},
  opacity: .85,
}

const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: {xs: .15, sm:.25},
  fontSize: {xs: 13.5, sm: 14.25, md: 17, lg: 18, xl:20},
  opacity: .75,
  lineHeight: {xs: 1.4, sm: 1.6},
}


const Details = React.forwardRef((props, r) => {
  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    // delay: 100,
    triggerOnce: true
  });
  
  console.log(inView)
  return (
    <Container>
      <Box sx={{position: 'relative'}}>
        <Grid container>
          {/* header */}
          <Grid item xs={12} sx={{mb: {xs: 8, sm: 13, md: 14, lg: 16}, pt: {xs: 8, sm: 12, md: 14, lg: 15}}} ref={ref} >
            {/* <Typography variant="h4" sx={{fontSize: {xs: 48, sm: 60, md: 68, lg: 70}}} ref={viewRef}>details</Typography> */}
            <Box sx={{height: {xs: 80, sm: 100, md:120}}}>
              {inView  && <DetailsHeader/> }
            </Box>
          </Grid>

          {/* mobile date header */}
          <Grid item xs={12} sx={{display: {xs: "initial", sm: "none"}, mb: 8}}>
            <Box sx={{display: "flex", alignItems: "center", flexDirection: "row", gap: 1, justifyContent: "center"}}>
              <Box sx={{height: "1px", width: 16, backgroundColor: "success.main", my: 2, mx: 1, opacity: .4}}></Box>          
              <Typography sx={{fontSize: 16, letterSpacing: .75, opacity: .75, lineHeight: 1}}>Dec</Typography>
              <Box sx={{borderRadius: "50%", border: 1, borderColor: "success.main", width: 45, height: 45, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography sx={{lineHeight: 1, fontSize: 18, fontFamily: "Bodoni-Bold"}}>22</Typography>
              </Box>
              <Typography sx={{fontSize: 13, letterSpacing: .5, opacity: .75, lineHeight: 1}}>2023</Typography>
              <Box sx={{height: "1px", width: 16, backgroundColor: "success.main", my: 2, mx: 1, opacity: .4}}></Box>          
            </Box>
          </Grid>

          {/* mobile ceremony & reception */}
          <Grid item xs={11} sx={{mb: .25, display: {xs: "initial", sm: "none"}, mx: "auto"}}>
            <Typography sx={headerStyles}>CEREMONY & RECEPTION</Typography>
            <Box sx={{height: 8, width: "1px", backgroundColor: "success.main", mx: "auto", my: 1.5}}></Box>          
            <Typography sx={{...descriptionStyles, fontSize: 13}}>
              <Box component="span" sx={{display: "block"}}>Celebration starts at four o'clock in the afternoon</Box>
              <Box component="span" sx={{display: "block"}}>at the garden.</Box>
            </Typography>
            <Typography sx={{...descriptionStyles, fontSize: 13}} mt={2}>
              <Box component="span" sx={{display: "inline"}}>Reception follows </Box>
              <Box component="span" sx={{display: "inline"}}>at <Box component="span" sx={{display:"inline", letterSpacing: 1.5, mx: .25}}>The Shed by The V Farm</Box></Box>
              <Box component="span" sx={{display: "block"}}>Bamban, Tarlac</Box>
            </Typography>
          </Grid>
          
          <Grid item xs={12} sx={{display: {xs: "none", sm: "initial"}}}>
            <Box sx={{height: 35, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
          </Grid>
          
          <Grid item xs={12} sm={5.25} md={5} sx={{mb: {xs: 13, sm: 0}, display: {xs: "none", sm: "initial"}}}>
            <Typography sx={headerStyles}>CEREMONY</Typography>
            <Box sx={{height: {xs: 8, sm: 13, md:15}, width: "1px", backgroundColor: "success.main", mx: "auto", my: {xs: .15, sm: 1.5, md: 2, lg:2.5}}}></Box>          
            <Typography sx={descriptionStyles}>
              <Box component="span" sx={{display: "block"}}>Celebration starts <Box component="br" sx={{display: {md: "none"}}}></Box>at four o'clock in the afternoon</Box>
              <Box component="span" sx={{display: "block"}}>at the garden.</Box>
            </Typography>
          </Grid>
          
          <Grid item sm={1.5} md={2} sx={{display: {xs: "none", sm: "initial"}}}>
            <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: .75}}>
              <Typography sx={{fontSize: {sm: 18, md: 19, lg: 20}, letterSpacing: 2, opacity: .75}}>Dec</Typography>
              <Box sx={{borderRadius: "50%", border: 1, borderColor: "success.main", width: {sm: 60, md: 70, lg: 75}, height: {sm: 60, md: 70, lg: 75}, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography sx={{lineHeight: 1, fontSize: {sm: 27, md: 29, lg: 30}, fontFamily: "Bodoni-Bold"}}>22</Typography>
              </Box>
              <Typography sx={{fontSize: {sm: 16, md: 17, lg: 18}, letterSpacing: .5, opacity: .75}}>2023</Typography>
            </Box>
            <Box sx={{height: 80, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
          </Grid>
          
          <Grid item  xs={12} sm={5.25} md={5} sx={{mb: {xs: 3.5, sm: 0}, display: {xs: "none", sm: "initial"}}}>
            <Typography sx={headerStyles}>RECEPTION</Typography>
            <Box sx={{height: {xs: 8, sm: 13, md:15}, width: "1px", backgroundColor: "success.main", mx: "auto", my: {xs: .15, sm: 1.5, md: 2, lg:2.5}}}></Box>          
            <Typography sx={descriptionStyles}>
              <Box component="span" sx={{display: "block"}}>Reception follows </Box>
              <Box component="span" sx={{display: "block"}}>at <Box component="span" sx={{display:"inline-block", letterSpacing: 2.5, mx: .5}}>The Shed by The V Farm</Box></Box>
              <Box component="span" sx={{display: "block"}}>Bamban, Tarlac</Box>
            </Typography>
          </Grid>

          <Grid item xs={7} sm={4.5} mx="auto" sx={{opacity: .75, transition: "all 500ms ease", pointerEvents: "none", my: {xs: 1, sm: 4, md: 5, lg: 5}}}>
            <Image src={shedImage} sx={{filter: "grayscale(25%)"}} fit="scale-down"/>
          </Grid>
          
          <Grid item xs={12} mt={{xs: 5, sm:5}}>
            <Grid container>
              <Grid item xs={11} sm={5.5} sx={{mx: {xs:"auto", sm: "initial"}}}>
                <Typography sx={headerStyles}>DRESS CODE</Typography>
                <Box sx={{height: {xs: 8, sm: 13, md:15}, width: "1px", backgroundColor: "success.main", mx: "auto", my: {xs: .15, sm: 1.5, md: 2, lg:2.5}}}></Box>          
                <Typography sx={{fontFamily: "Bodoni", fontSize: {xs: 14, sm: 20, md: 22, lg: 24}, letterSpacing: {xs: .2, sm: .5}, opacity: .75}}>
                  We would love to see our guests in formal attire
                </Typography>
              </Grid>
              <Grid item sm={1.25}></Grid>
              <Grid item xs={10} sm={5.25} sx={{display: "flex", flexDirection: "column", justifyContent: "center", pl: {sm:2}, mt: {xs: 5, sm:3}, mx: {xs:"auto", sm: "initial"}}}>
                <Box sx={{mx: "auto", display: "flex", flexDirection: "column", gap: {xs: .5, sm:2}, mb: 5, justifyContent: "center"}}>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={{fontSize: { xs: 15,sm: 19, md: 21, lg:22 }, fontFamily: "Bodoni-Bold", letterSpacing: 1, color: "secondary.main"}}>Ladies</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={{fontSize: {xs: 13, sm: 17, md: 18, lg: 20}, letterSpacing: .75, color: "primary.main", opacity: .8}}>Long Dress</Typography>
                  </Box>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={{fontSize: { xs: 15,sm: 19, md: 21, lg:22 }, fontFamily: "Bodoni-Bold", letterSpacing: 1, color: "secondary.main"}}>Men</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={{fontSize: {xs: 13, sm: 17, md: 18, lg: 20}, letterSpacing: .75, color: "primary.main", opacity: .8}}>Long sleeves and black slacks</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={10} sm={5.5} mx="auto" mt={{xs: 4, sm:18}}>
              <Typography sx={{fontSize: {xs: 16, sm: 26, md: 28, lg:30}, letterSpacing: 2, color: "primary.main", opacity: .85, transform: "skewX(-8deg)"}}>Be guided with our color palette</Typography>
              <Box sx={{height: "1px", width: {xs: 20, sm:35}, backgroundColor: "success.main", mx: "auto", my: {xs: 1.5, sm:2}}}></Box>          
              <Box mt={{xs:3, sm:6}} mx={{xs: 3, sm: 0}}>
                <Image src={palette} alt="palette" duration={0} sx={{filter: "drop-shadow(2px 2px 3px rgb(0 0 0 / 0.1))"}}/>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default Details