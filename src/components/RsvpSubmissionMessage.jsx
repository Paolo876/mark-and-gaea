import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import Image from 'mui-image'
import flowerImg from "../assets/images/flower.svg"
import CloseIcon from '@mui/icons-material/Close';


const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: .15,
  fontSize: {xs: 17, sm: 20, md: 22, lg:24},
  opacity: .75,
  lineHeight: 1.55,
  color: "secondary.main",
  transform: "skewX(-5deg)"
}


const RsvpSubmissionMessage = ({ setIsSubmitted }) => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: {xs: 5, sm: 6, md: 7, lg: 8}}}>
      <Box sx={{display: "flex", justifyContent: "right"}}>
        <IconButton 
          sx={{border: 1, borderColor: "success.main"}}
          onClick={() => setIsSubmitted(false)}
          >
          <CloseIcon color="secondary"/>
        </IconButton>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", opacity: .75}}>
        <Image src={flowerImg} fit="scale-down" sx={{maxHeight: {xs: 210, sm: 250, md: 280, lg: 300}}} duration={0}/>
      </Box>
      <Box sx={{textAlign: "center"}}>
        <Typography sx={descriptionStyles}>Rsvp submitted. Thank you for responding!</Typography>
      </Box>
    </Box>
  )
}

export default RsvpSubmissionMessage