import React from 'react'
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import Image from 'mui-image';
import roadMap from "../../assets/images/bambanROADmap.svg"
import LocationOnIcon from '@mui/icons-material/LocationOn';


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
  return (
    <Container>
      <Box sx={{position: 'relative', mt: {xs: 10, sm: 18, md: 23, lg:25}}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: {xs: 8, sm: 13, md: 14, lg: 16}, pt: {xs: 8, sm: 12, md: 14, lg: 15}}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {xs: 48, sm: 60, md: 70, lg: 70}}}>map</Typography>
          </Grid>

          <Grid item xs={12} sx={{mx: "auto"}}>
            <Grid container>
              <Grid item xs={6} sm={5} md={4.5} sx={{textAlign: "left"}}>
                <Typography sx={headerStyles}>The V Farm</Typography>
                <Box sx={{width: {xs: 10, sm: 13, md:15}, height: "1px", backgroundColor: "success.main", mr: "auto", my: {xs: 1, sm: 1.5, md: 2, lg:2.5}}}></Box>          
                <Typography sx={descriptionStyles}>
                  <Box component="span" sx={{display: "block"}}>Valencia Farm, Macale Extension, </Box>
                  <Box component="span" sx={{display: "block"}}>Sitio Bana, Brgy, Bamban, </Box>
                  <Box component="span" sx={{display: "block"}}>2317 Tarlac, Philippines</Box>
                </Typography>
                <Box sx={{mt: 10, display: {xs: "none", sm: "initial"}}}>
                  <Button 
                    variant='contained' 
                    // color="success" 
                    startIcon={<LocationOnIcon/>}
                    sx={{
                      color: "background.paper", 
                      fontSize: {xs: 12, sm: 13, md: 15, lg: 15, xl:16},
                      letterSpacing: 1.5,
                      transition: "all 450ms ease",
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
              <Grid item xs={6} sm={7} md={7.5}>
                <Box>
                  <Image src={roadMap} fit="cover"/>
                </Box>
              </Grid>
              
              {/* button on xs view */}
              <Grid item xs={12} sx={{display: {xs: "flex", sm: "none"}, mt: 5, alignItems: "center", justifyContent: "center"}}>
                <Button 
                  variant='contained' 
                  // color="success" 
                  startIcon={<LocationOnIcon/>}
                  sx={{
                    color: "background.paper", 
                    fontSize: {xs: 12, sm: 13, md: 15, lg: 15, xl:16},
                    letterSpacing: 1.5,
                    transition: "all 450ms ease",
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
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default Map