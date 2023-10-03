import React from 'react'
import { Container, Box, Typography } from '@mui/material';
import Image from 'mui-image';
import and from "../../assets/images/and.svg"

const Home = () => {
  return (
    <Container>
      <Box sx={{height: "100vh"}}>
        <Box sx={{height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", gap: 5}}>
          <Box>
            <Typography sx={{letterSpacing: 5, fontSize: {xl: 18}}}>THE WEDDING OF</Typography>
          </Box>
          <Box sx={{height: 350, width: 200, border: 1}}>
            {/* image here */}
          </Box>
          <Box sx={{display: "flex", flexDirection: "row"}}>
            <Typography variant="h3">MARK</Typography>
            <Image src={and} alt="and" duration={0} sx={{px: 4}}/>
            <Typography variant="h3">GAEA</Typography>
          </Box>
          <Box>
            <Typography sx={{letterSpacing: 7}}>DECEMBER  .  22  .  2023</Typography>
            <Typography sx={{transform: "skewX(-12deg)", letterSpacing: 1.5}}> at four o'clock in the afternoon</Typography>
            <Typography sx={{letterSpacing: 5}}>THE  V  FARM</Typography>
            <Typography sx={{transform: "skewX(-12deg)", letterSpacing: 1.5}}> Tarlac, Philippines</Typography>

          </Box>
        </Box>

      </Box>
    </Container>
  )
}

export default Home