import React from 'react'
import { Box, Typography, Container } from '@mui/material';
import image_1 from "../../assets/images/home_1.jpg"
import Image from 'mui-image';
import Appbar from '../../components/Appbar';


const Introduction = () => {
  return (
    <Container>
      <Appbar/>
      <Box sx={{zIndex: 1, height: "100vh", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", gap: 8}}>
        <Box>
          <Typography variant="h3">MARK & GAEA</Typography>
        </Box>
        <Box>
          <Typography sx={{letterSpacing: 7, fontSize: {xl: 25}}}>DECEMBER  .  22  .  2023</Typography>
        </Box>
      </Box>

      {/* background */}
      <Box sx={{position: "absolute", height: "100vh", top:0, left: 0, width: "100%", opacity: .6, filter: "contrast(80%) brightness(95%)", zIndex: -1}}>
        <Box sx={{position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%"}}>
          <Image src={image_1} duration={1500} height="auto" fit="contain" width="auto" sx={{maxHeight: "60vh"}}/>
        </Box>
        <Box 
          sx={{
            position: "absolute", 
            zIndex: -1, 
            background: "rgba(197,197,197,1)", 
            background: "linear-gradient(0deg, rgba(197,197,197,1) 75%, rgba(241,233,231,1) 100%)",
            height: "100vh", 
            width: "100%", 
            top:0, 
            left: 0
          }}>
        </Box>
      </Box>
		</Container>
  )
}

export default Introduction