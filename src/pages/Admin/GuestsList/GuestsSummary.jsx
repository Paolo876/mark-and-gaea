import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

const boxStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  lineHeight: 1,
  mb: {xs: 1.5, sm: 2, md:3},
  gap: 10,
}

const descStyles = {
  fontSize: {xs: 15, sm: 16, md: 17, lg: 18},
  letterSpacing: {xs: .5, md:1},
  textTransform: "uppercase",
}

const valueStyles = {
  fontFamily: "Bodoni-Bold",
  fontSize: {xs: 20, sm: 23, md: 24, lg: 25},

}


const GuestsSummary = ({ guestsList }) => {

  const totalSubmissions = guestsList.length
  const totalNotAttending = guestsList.filter(item => !item.isAttending).length
  const totalAttending = guestsList.filter(item => item.isAttending).length


  return (
    <Box sx={{width: "fit-content"}}>
      <Box align="left">
        <Typography sx={{fontSize: {xs: 23, sm: 24, md: 26, lg: 28}, fontFamily: "Bodoni-Bold", letterSpacing: 1}}>Summary Report</Typography>
      </Box>
      <Divider/>
      <Box sx={boxStyles} mt={{xs: 2, sm: 3, md: 4}}>
        <Typography sx={descStyles}>Total Submissions: </Typography>
        <Typography sx={valueStyles}>{totalSubmissions}</Typography>
      </Box>
      <Box sx={boxStyles}>
        <Typography sx={descStyles}>Total Not Attending: </Typography>
        <Typography sx={{...valueStyles, opacity: .65}} >{totalNotAttending}</Typography>
      </Box>
      <Box sx={boxStyles} mt={{xs: 2, sm: 3, md: 4}}>
        <Typography sx={descStyles}>Total Attending: </Typography>
        <Typography sx={valueStyles}>{totalAttending}</Typography>
      </Box>
    </Box>
  )
}

export default GuestsSummary