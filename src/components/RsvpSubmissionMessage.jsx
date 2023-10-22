import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import Image from 'mui-image'
import flowerImg from "../assets/images/flower.svg"
import CloseIcon from '@mui/icons-material/Close';


const descriptionStyles = {
  fontFamily: "Bodoni-bold",
  letterSpacing: .25,
  fontSize: 28,
  opacity: .75,
  lineHeight: 1.55,
  color: "secondary.main"
}


const RsvpSubmissionMessage = ({ setIsSubmitted }) => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: 8}}>
      <Box sx={{display: "flex", justifyContent: "right"}}>
        <IconButton 
          sx={{border: 1, borderColor: "success.main"}}
          onClick={() => setIsSubmitted(false)}
          >
          <CloseIcon color="secondary"/>
        </IconButton>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", opacity: .75}}>
        <Image src={flowerImg} fit="scale-down" sx={{maxHeight: 300}}/>
      </Box>
      <Box sx={{textAlign: "center"}}>
        <Typography sx={descriptionStyles}>Rsvp submitted. Thank you for responding!</Typography>
      </Box>
    </Box>
  )
}

export default RsvpSubmissionMessage