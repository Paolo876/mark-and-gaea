import React from 'react'
import { Box, Typography, Grid } from '@mui/material';


const IamYou = () => {
  return (
    <Box sx={{height: "105vh"}}>
      <Grid container sx={{height: "100%"}}>
        <Grid item xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Typography sx={{textAlign: "center", fontSize: {xl: 20}, letterSpacing: 2, transform: "skewX(-12deg)", opacity: .9, lineHeight: 1.35 }}>
            <Box component="span" sx={{display: "block"}}>
              I am not just me;
            </Box>
            <Box component="span" sx={{display: "block"}}>
              I am you and you are me--
            </Box>
            <Box component="span" sx={{display: "block"}}>
              We are. Hereafter.
            </Box>
            <Box component="span" sx={{display: "block", fontSize: 16, mt: 1, opacity: .75}}>
              - Gaea
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default IamYou