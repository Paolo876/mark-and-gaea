import React from 'react'
import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import and from "../../assets/images/and.svg"
import flower from "../../assets/images/flower.svg"
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Box sx={{height: "100vh"}}>
      <Box sx={{height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", gap: 8}}>
        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
          <Box>
            <Link>Details</Link>
          </Box>
          <Box>
            <Link>Maps</Link>
          </Box>
          <Box>
            <Link>RSVP</Link>
          </Box>
        </Box>
        <Box mb={4}>
          <Typography sx={{letterSpacing: 7, fontSize: {xl: 20}, opacity: .8}}>THE WEDDING OF</Typography>
        </Box>
        <Box sx={{height: 350, width: "auto"}}>
          <Image src={flower}/>
        </Box>
        <Box sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="h3">MARK</Typography>
          <Image src={and} alt="and" duration={0} sx={{px: 4}}/>
          <Typography variant="h3">GAEA</Typography>
        </Box>
        <Box sx={{opacity: .85}}>
          <Typography sx={{letterSpacing: 7, fontSize: {xl: 25}}}>DECEMBER  .  22  .  2023</Typography>
          <Typography sx={{transform: "skewX(-12deg)", mt: 1, letterSpacing: 2, fontSize:{xl: 20}}}> at four o'clock in the afternoon</Typography>
          <Typography sx={{letterSpacing: 7, fontSize:{xl: 22}, my: .5}}>THE  V  FARM</Typography>
          <Typography sx={{transform: "skewX(-12deg)", letterSpacing: 2, fontSize:{xl: 18}}}> Tarlac, Philippines</Typography>

        </Box>
      </Box>
    </Box>
  )
}

export default Landing