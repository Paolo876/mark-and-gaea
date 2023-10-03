import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import Image from 'mui-image';
import image from "../../assets/images/home_1.jpg"

const IamYou = () => {
  return (
    <Box sx={{height: "100vh"}}>
      <Grid container sx={{height: "100%"}}>
        <Grid item xs={5} sx={{display: "flex", alignItems: "center"}}>
          <Typography sx={{textAlign: "left", fontSize: {xl: 25}, letterSpacing: 2, transform: "skewX(-12deg)", opacity: .9, lineHeight: 1.4 }}>
            <Box component="span" sx={{display: "block"}}>
              I am not just me;
            </Box>
            <Box component="span" sx={{display: "block"}}>
              I am you and you are me--
            </Box>
            <Box component="span" sx={{display: "block"}}>
              We are. Hereafter.
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={7} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
          <Box 
            sx={{
              // height: 600, 
              width: "auto",
              opacity: .8,
              position: "relative",
              "&:before": {
                display: "block",
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                boxShadow: "inset 0px 0px 5px 5px #f1e9e7",
              }
            }}
          >
            <Image src={image} sx={{zIndex: -1}}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default IamYou