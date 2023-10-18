import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'mui-image';
import palette from "../../assets/images/palette.svg"

const headerStyles = {
  fontFamily: "Bodoni-Bold",
  fontSize: 22,
  letterSpacing: 3,
  opacity: .85,
}

const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: .5,
  fontSize: 18,
  opacity: .75
}


const Details = React.forwardRef((props, ref) => {
  
  return (
    <Container>
      <Box sx={{position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 16, pt: 15}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{height: 35, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
          </Grid>
          <Grid item xs={5}>
            <Typography sx={headerStyles}>CEREMONY</Typography>
            <Box sx={{height: 15, width: "1px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
            <Typography sx={descriptionStyles}>Ceremony will be held at <Box sx={{fontFamily: "Bodoni-Bold", display: "inline"}}>The V Farm Bamban, Tarlac</Box>- <Box component="span" sx={{display: "block"}}>at four o'clock in the afternoon at the garden.</Box></Typography>
            {/* <Typography sx={descriptionStyles}>Celebration starts at four o'clock in the afternoon at the garden.</Typography> */}
          </Grid>
          <Grid item xs={2}>
            <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: .75}}>
              <Typography sx={{fontSize: 20, letterSpacing: 2, opacity: .75}}>Dec</Typography>
              <Box sx={{borderRadius: "50%", border: 1, borderColor: "success.main", width: 75, height: 75, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography sx={{lineHeight: 1, fontSize: 30, fontFamily: "Bodoni-Bold"}}>22</Typography>
              </Box>
              <Typography sx={{fontSize: 18, letterSpacing: .5, opacity: .75}}>2023</Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Typography sx={headerStyles}>RECEPTION</Typography>
            <Box sx={{height: 15, width: "1px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
            <Typography sx={descriptionStyles}>Reception follows after the ceremony at <Box sx={{fontFamily: "Bodoni-Bold"}}>The Shed by the V Farm</Box></Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{height: 80, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
          </Grid>

          <Grid item xs={12} mt={35}>
            <Grid container>
              <Grid xs={5.5}>
                <Typography sx={{fontFamily: "Bodoni", fontSize: 27, letterSpacing: .1, textAlign: "left", lineHeight: 1.35, color: "secondary.main"}}>
                <Box sx={{height: "1px", width: 25, backgroundColor: "primary.main", display: "inline-block", transform: "translateY(-8px)", mr: .5, opacity: .25}}></Box>
                  We kindly request our guests to be dressed in a formal attire for our special day. Please be guided with our color palette below.
                </Typography>
              </Grid>
              <Grid xs={1.25}></Grid>
              <Grid xs={5.25} sx={{display: "flex", flexDirection: "column", justifyContent: "center", pl: 2, mt: 1}}>
                <Box sx={{ml: .5, display: "flex", flexDirection: "column", gap: 2, mb: 5}}>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={{fontSize: 26, fontFamily: "Bodoni-Bold", letterSpacing: 1, color: "primary.main"}}>Ladies</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={{fontSize: 24, letterSpacing: .5, color: "primary.main"}}>Long Dress</Typography>
                  </Box>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={{fontSize: 26, fontFamily: "Bodoni-Bold", letterSpacing: 1, color: "primary.main"}}>Men</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={{fontSize: 24, letterSpacing: .5, color: "primary.main"}}>Long sleeves and black slacks</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid xs={5.5} mx="auto" mt={12}>
              <Box>
                <Image src={palette} alt="palette" duration={0} sx={{filter: "drop-shadow(2px 2px 3px rgb(0 0 0 / 0.1))"}}/>
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
})

export default Details