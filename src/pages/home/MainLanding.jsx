import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import and from "../../assets/images/and.svg"
import headerImage from "../../assets/images/image_1.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'mui-image';


const MainLanding = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{height: "100vh", position: 'relative'}}>
        <Grid container sx={{width: "100%", height: "100%"}}>
          <Grid item xs={6} sx={{width: "100%", height: "100%", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center", pb: 10}}>
            <Box mb={15}>
              <Typography sx={{letterSpacing: 7, fontSize: {xl: 23}, opacity: .8}}>THE WEDDING OF</Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent:"left", gap: 2.5}}>
              <Typography variant="h3" fontSize={70} letterSpacing={8}>MARK</Typography>
              <Box align="left" sx={{opacity: .75}}>
                <Image src={and} alt="and" duration={0} height={50} width="auto" fit="scale-down"/>
              </Box>
              <Typography variant="h3" fontSize={70} letterSpacing={8}>GAEA</Typography>
            </Box>
            <Box sx={{opacity: .75}} mt={20}>
              <Typography sx={{letterSpacing: 8, fontSize: {xl: 22}}}>DECEMBER  .  22  .  2023</Typography>
              <Typography sx={{transform: "skewX(-12deg)", mt: 1, letterSpacing: 2, fontSize:{xl: 17}}}> at four o'clock in the afternoon</Typography>
              <Typography sx={{letterSpacing: 7, fontSize:{xl: 17}, my: .25}}>THE  V  FARM</Typography>
              <Typography sx={{transform: "skewX(-12deg)", letterSpacing: 2, fontSize:{xl: 17}}}> Tarlac, Philippines</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{width: "100%", background: 'black', display:"flex", justifyContent: "right", alignItems: "flex-end"}}>
            <Box>
              <Image src={headerImage} alt="headerImage" duration={0} fit="scale-down" sx={{maxHeight: "90vh",}}/>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* backdrop */}
      <Box sx={{position: "absolute", zIndex: -1, height: "100vh", width: "100%", top:0, left: 0, overflowX: "hidden"}}>
        <Box sx={{position: "absolute", top:0, left: "50%", width: "50vw", background: "black", height: "100%", zIndex: -1}}></Box>
      </Box>
    </Container>
  )
}

export default MainLanding