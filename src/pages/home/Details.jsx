import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'mui-image';
import palette from "../../assets/images/palette.svg"

const headerStyles = {
  fontFamily: "Bodoni-Bold",
  fontSize: 22,
  letterSpacing: 2,
}

const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: .5,
  fontSize: 18,
  opacity: .75
}


const Details = () => {
  
  return (
    <Container id="details">
      <Box sx={{height: "120vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 15}}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{height: 35, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
          </Grid>
          <Grid item xs={4.5}>
            <Typography sx={headerStyles}>CEREMONY</Typography>
            <Box sx={{height: 15, width: "1px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
            <Typography sx={descriptionStyles}>Ceremony will be held at the V-Farm Bamban, Tarlac- <Box component="span" sx={{display: "block"}}>4:00 in the afternoon, Friday, December 22, 2023.</Box></Typography>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: 1}}>
              <Typography sx={{fontSize: 18, letterSpacing: 2, opacity: .75}}>Dec</Typography>
              <Box sx={{borderRadius: "50%", border: 1, borderColor: "success.main", width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography sx={{lineHeight: 1, fontSize: 23, fontFamily: "Bodoni-Bold"}}>22</Typography>
              </Box>
              <Typography sx={{fontSize: 16, letterSpacing: .5, opacity: .75}}>2023</Typography>
            </Box>
          </Grid>
          <Grid item xs={4.5}>
            <Typography sx={headerStyles}>RECEPTION</Typography>
            <Box sx={{height: 15, width: "1px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
            <Typography sx={descriptionStyles}>Reception follows after the ceremony at "The Shed" in V-Farm.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{height: 80, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
          </Grid>

          <Grid item xs={12} mt={25}>
            <Grid container>
              <Grid xs={5.5}>
                <Typography sx={{fontFamily: "Bodoni", fontSize: 28, letterSpacing: .1, textAlign: "left", lineHeight: 1.5, color: "secondary.main"}}>
                <Box sx={{height: "1px", width: 25, backgroundColor: "primary.main", display: "inline-block", transform: "translateY(-8px)", mr: .5, opacity: .25}}></Box>
                  We kindly request that our honored guests will be dressed in a formal attire and in accordance to these colors for our special day.
                </Typography>
              </Grid>
              <Grid xs={1.25}></Grid>
              <Grid xs={5.25} sx={{display: "flex", flexDirection: "column", justifyContent: "center", pl: 2, mt: 3}}>
                <Box sx={{ml: .5, display: "flex", flexDirection: "column", gap: 1, mb: 5}}>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={{fontSize: 25, fontFamily: "Bodoni-Bold", letterSpacing: 1, color: "primary.main"}}>Ladies</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={{fontSize: 22, letterSpacing: .5, color: "primary.main"}}>Long Dress</Typography>
                  </Box>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={{fontSize: 25, fontFamily: "Bodoni-Bold", letterSpacing: 1, color: "primary.main"}}>Men</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={{fontSize: 22, letterSpacing: .5, color: "primary.main"}}>Long sleeves and black slacks</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid xs={7} mx="auto" mt={8}>
              <Box>
                <Image src={palette} alt="palette" duration={0}/>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} mt={20} align="left">
            <Typography sx={{fontFamily: "Bodoni", fontSize: 28, letterSpacing: .35, textAlign: "center"}}>
              We kindly request that our honored guests will be dressed in a formal attire and in accordance to these colors for our special day.
            </Typography>
            <Grid container mt={10}>
              <Grid item xs={5}>
                <Box sx={{ml: .5, mt: 4, display: "flex", flexDirection: "column", gap: 3, justifyContent: "center", alignItems: "center"}}>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={headerStyles}>Ladies</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={descriptionStyles}>Long Dress</Typography>
                  </Box>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={headerStyles}>Men</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={descriptionStyles}>Long sleeves and black slacks</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={{height: "100%", width: "1px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
              </Grid>
              <Grid item xs={5} sx={{display:"block", ml: "auto", mt: 4}}>
                <Box >
                  <Image src={palette} alt="palette" />
                </Box>
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  )
}

export default Details