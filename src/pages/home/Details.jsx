import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'mui-image';
import palette from "../../assets/images/palette.svg"
import shedImage from "../../assets/images/shed_sketch.png"


const headerStyles = {
  fontFamily: "Bodoni-Bold",
  fontSize: 25,
  letterSpacing: 3.5,
  opacity: .85,
}

const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: .5,
  fontSize: 21,
  opacity: .75,
  lineHeight: 1.55
}


const Details = React.forwardRef((props, ref) => {
  
  return (
    <Container>
      <Box sx={{position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 16, pt: 15}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {lg: 60}}}>details</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{height: 35, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
          </Grid>
          <Grid item xs={5}>
            <Typography sx={headerStyles}>CEREMONY</Typography>
            <Box sx={{height: 15, width: "1px", backgroundColor: "success.main", mx: "auto", my: 2.5}}></Box>          
            <Typography sx={descriptionStyles}>
              <Box component="span" sx={{display: "block"}}>Celebration starts at four o'clock in the afternoon</Box>
              <Box component="span" sx={{display: "block"}}>at the garden.</Box>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: .75}}>
              <Typography sx={{fontSize: 20, letterSpacing: 2, opacity: .75}}>Dec</Typography>
              <Box sx={{borderRadius: "50%", border: 1, borderColor: "success.main", width: 75, height: 75, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography sx={{lineHeight: 1, fontSize: 30, fontFamily: "Bodoni-Bold"}}>22</Typography>
              </Box>
              <Typography sx={{fontSize: 18, letterSpacing: .5, opacity: .75}}>2023</Typography>
            </Box>
            <Box sx={{height: 80, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          

          </Grid>
          <Grid item xs={5}>
            <Typography sx={headerStyles}>RECEPTION</Typography>
            <Box sx={{height: 15, width: "1px", backgroundColor: "success.main", mx: "auto", my: 2.5}}></Box>          
            <Typography sx={descriptionStyles}>
              <Box component="span" sx={{display: "block"}}>Reception follows after the ceremony</Box>
              <Box component="span" sx={{display: "block"}}>at <Box component="span" sx={{display:"inline-block", letterSpacing: 4, mx: .75}}>The Shed by The V Farm</Box></Box>
              <Box component="span" sx={{display: "block"}}>Bamban, Tarlac</Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4.5} mx="auto" sx={{opacity: .85, transition: "all 500ms ease", "&:hover": {transform: "scale(1.025)", opacity: 1}}}>
                <Image src={shedImage} sx={{filter: "grayscale(15%)"}}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={5}>
            <Grid container>
              <Grid item xs={5.5}>
                <Typography sx={headerStyles}>DRESS CODE</Typography>
                <Box sx={{height: 15, width: "1px", backgroundColor: "success.main", mx: "auto", my: 2.5}}></Box>          

                <Typography sx={{fontFamily: "Bodoni", fontSize: 24, letterSpacing: .5, opacity: .75}}>
                We would love to see our guests in formal attire
                </Typography>
              </Grid>
              <Grid item xs={1.25}></Grid>
              <Grid item xs={5.25} sx={{display: "flex", flexDirection: "column", justifyContent: "center", pl: 2, mt: 3}}>
                <Box sx={{mx: "auto", display: "flex", flexDirection: "column", gap: 2, mb: 5, justifyContent: "center"}}>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={{fontSize: 22, fontFamily: "Bodoni-Bold", letterSpacing: 1, color: "primary.main"}}>Ladies</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={{fontSize: 20, letterSpacing: .75, color: "primary.main", opacity: .8}}>Long Dress</Typography>
                  </Box>
                  <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                    <Typography sx={{fontSize: 22, fontFamily: "Bodoni-Bold", letterSpacing: 1, color: "primary.main"}}>Men</Typography>
                    <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", my: 2}}></Box>
                    <Typography sx={{fontSize: 20, letterSpacing: .75, color: "primary.main", opacity: .8}}>Long sleeves and black slacks</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={5.5} mx="auto" mt={18}>
              <Typography sx={{fontSize: 30, letterSpacing: 2, color: "primary.main", opacity: .85, transform: "skewX(-8deg)"}}>Be guided with our color palette</Typography>
              <Box sx={{height: "1px", width: 35, backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
              <Box mt={6}>
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