import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'mui-image';
import palette from "../../assets/images/palette.svg"

const headerStyles = {
  mb: 2,
  fontFamily: "Bodoni-Bold",
  fontSize: 25,
  letterSpacing: 3,
}

const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: 1.5,
  fontSize: 18,
  opacity: .8
}


const Details = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{height: "110vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 5}}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{height: 30, width: 2, backgroundColor: "success.main", mx: "auto", my: 2}}></Box>
            <Box>
              <Typography sx={headerStyles}>CEREMONY</Typography>
              <Typography sx={descriptionStyles}>Ceremony starts at 4:00 in the afternoon at the garden.</Typography>
            </Box>
            <Box sx={{height: 30, width: 2, backgroundColor: "success.main", mx: "auto", my: 2}}></Box>
            <Box>
              <Typography sx={headerStyles}>RECEPTION</Typography>
              <Typography sx={descriptionStyles}>Reception follows after the ceremony at "The Shed" in V-Farm.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{fontFamily: "Bodoni-Bold", }}>We request that you come in a formal attire.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Details