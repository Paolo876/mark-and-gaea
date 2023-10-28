import React from 'react'
import { Box, Typography, Container, Grid, Button, Fade, ButtonBase } from '@mui/material';
import Image from 'mui-image';
import roadMap from "../../assets/images/bambanROADmap.svg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapHeader from '../../components/headers/MapHeader';
import { useInView } from 'react-intersection-observer';


const headerStyles = {
  fontFamily: "Bodoni-Bold",
  fontSize: {xs:  22, sm: 24, md: 26, lg: 28},
  letterSpacing: 3.5,
  opacity: .85,
}

const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: {sm: .25, md:.5},
  fontSize: {xs: 12, sm: 14.25, md: 17, lg: 18, xl:20},
  opacity: .75,
  lineHeight: 1.4,
}


const Map = React.forwardRef((props, ref) => {
    
  const { ref: viewRef, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -23% 0px",
    triggerOnce: true
  });
    
  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -23% 0px",
    triggerOnce: true
  });


  return (
    <Container>
      <Box sx={{position: 'relative', mt: {xs: 16, sm: 18, md: 23, lg:25}}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: {xs: 4, sm: 6, md: 7, lg: 8}, pt: {xs: 8, sm: 12, md: 14, lg: 15}}} ref={ref}>
            <Box ref={viewRef}></Box>
            {/* <Typography variant="h4" sx={{fontSize: {xs: 48, sm: 60, md: 70, lg: 70}}}>map</Typography> */}
            <Box sx={{height: {xs: 80, sm: 100, md:120}}}>
              {inView  && <MapHeader/> }
            </Box>
          </Grid>

          <Grid item xs={12} sx={{mx: "auto"}} ref={contentRef}>
            <Grid container>
              <Fade
                in={contentInView}
                style={{ transitionDelay: "1100ms" }}
                timeout={800}
              > 
                <Grid item xs={6} sm={5} md={4.5} sx={{textAlign: "left"}}>
                  <Typography sx={headerStyles}>The V Farm</Typography>
                  <Box sx={{width: {xs: 10, sm: 13, md:15}, height: "1px", backgroundColor: "success.main", mr: "auto", my: {xs: 1.25, sm: 1.5, md: 2, lg:2.5}}}></Box>          
                  <Typography sx={descriptionStyles}>
                    <Box component="span" sx={{display: "block"}}>Valencia Farm, Macale Extension, </Box>
                    <Box component="span" sx={{display: "block"}}>Sitio Bana, Brgy, Bamban, </Box>
                    <Box component="span" sx={{display: "block"}}>2317 Tarlac, Philippines</Box>
                  </Typography>
                  <Box sx={{mt: 10, display: {xs: "none", sm: "block"}}}>
                    <Button 
                      variant='contained' 
                      color="success" 
                      startIcon={<LocationOnIcon/>}
                      sx={{
                        color: "background.paper", 
                        fontSize: {xs: 12, sm: 13, md: 15, lg: 15, xl:16},
                        letterSpacing: 1.5,
                        transition: "all 450ms ease",
                        userSelect: "none",
                        "&:hover": {
                          transform: "scale(1.015)"
                        }
                      }}
                      size="large"
                      href="https://www.google.com/maps/dir//The+V+Farm/@15.2784518,120.4911154,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3396ebd098bff4bb:0xa0c4888a0152e854!2m2!1d120.5735103!2d15.2784723?entry=ttu"
                      target='_blank'
                    >
                      Get Directions
                    </Button>
                  </Box>
                </Grid>
              </Fade>
              <Fade
                in={contentInView}
                style={{ transitionDelay: "1500ms" }}
                timeout={800}
              > 
                <Grid item xs={6} sm={7} md={7.5}>
                  <ButtonBase 
                    sx={{
                      display: "initial",
                      width: "100%", 
                      height: "100%",
                      userSelect: "none",
                      transition: "all 450ms ease",
                      "&:hover": {
                        transform: "scale(1.015)",
                      }
                    }}
                  >
                  <Box sx={{pointerEvents: "none"}}>
                    <Image src={roadMap} fit="cover"/>
                  </Box>
                  </ButtonBase>
                </Grid>
              </Fade>

              {/* button on xs view */}
              <Fade
                in={contentInView}
                style={{ transitionDelay: "1900ms" }}
                timeout={800}
              > 
                <Grid item xs={12} sx={{display: {xs: "flex", sm: "none"}, mt: 5, alignItems: "center", justifyContent: "center"}}>
                  <Button 
                    variant='contained' 
                    color="success" 
                    startIcon={<LocationOnIcon  style={{fontSize: 14}} />}
                    sx={{
                      color: "background.paper", 
                      fontSize: {xs: 11, sm: 13, md: 15, lg: 15, xl:16},
                      letterSpacing: 1.2,
                      transition: "all 450ms ease",
                      "&:hover": {
                        transform: "scale(1.015)"
                      }
                    }}
                    href="https://www.google.com/maps/dir//The+V+Farm/@15.2784518,120.4911154,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3396ebd098bff4bb:0xa0c4888a0152e854!2m2!1d120.5735103!2d15.2784723?entry=ttu"
                    target='_blank'
                  >
                    Get Directions
                  </Button>
                </Grid>
              </Fade>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default Map