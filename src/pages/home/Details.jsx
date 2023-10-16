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
    <Container maxWidth="xl" id="details">
      <Box sx={{height: "110vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 15}}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Details</Typography>
          </Grid>
          <Grid xs={12}>
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
          <Grid xs={12}>
            <Box sx={{height: 80, width: "2px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>          
          </Grid>
          <Grid item xs={12} mt={20}>
            <Typography sx={{fontFamily: "Bodoni", fontSize: 22, letterSpacing: .5, }}>We request that guests will be dressed in a formal attire</Typography>
            <Box sx={{width: "fit-content", mx: "auto"}}>
              <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                <Typography>Ladies</Typography>
                <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>
                <Typography>Long Dress</Typography>
              </Box>
              <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                <Typography>Men</Typography>
                <Box sx={{width: 15, height: "1px", backgroundColor: "success.main", mx: "auto", my: 2}}></Box>
                <Typography>Long sleeves and black slacks</Typography>
              </Box>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Details