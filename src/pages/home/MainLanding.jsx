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
        <Grid container sx={{width: "100%"}}>
          <Grid item xs={6} sx={{width: "100%", textAlign: "left"}}>
            <Box mb={4}>
              <Typography sx={{letterSpacing: 7, fontSize: {xl: 20}, opacity: .8}}>THE WEDDING OF</Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent:"left", gap: 2.5}}>
              <Typography variant="h3" fontSize={65} letterSpacing={8}>MARK</Typography>
              <Box align="left" sx={{opacity: .75}}>
                <Image src={and} alt="and" duration={0} height={50} width="auto" fit="scale-down"/>
              </Box>
              <Typography variant="h3" fontSize={65} letterSpacing={8}>GAEA</Typography>
            </Box>
            <Box sx={{opacity: .75}}>
              <Typography sx={{letterSpacing: 7, fontSize: {xl: 20}}}>DECEMBER  .  22  .  2023</Typography>

            </Box>
          </Grid>
          <Grid item xs={6} sx={{width: "100%", background: 'black'}}>
            <Image src={headerImage} alt="headerImage" duration={0} fit="scale-down"/>
          </Grid>
        </Grid>

        {/* backdrop */}
      </Box>
    </Container>
  )
}

export default MainLanding