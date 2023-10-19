import React from 'react'
import { Box, Typography, Container, Grid, TextField, Radio, RadioGroup, FormControlLabel, FormControl, } from '@mui/material';
import Image from 'mui-image';
import image from "../../assets/images/webp/image4.webp"

const headerStyles = {
  fontFamily: "Bodoni-Bold",
  fontSize: 22,
  letterSpacing: 3.5,
  opacity: .85,
}


const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: 1,
  fontSize: 21,
  opacity: .9,
  lineHeight: 1.55
}

const labelStyles = {
  fontFamily: "Bodoni-Bold",
  letterSpacing: 1,
  fontSize: 22,
  opacity: .9,
  color: "secondary.main",
  textShadow: "1px 1px 3px rgba(15,15,15,.05)",
  mb: 1.5,
}

const inputStyles = {
  sx: {
    fontSize: 20,
    letterSpacing: 1,
    color: "text.secondary",
    textShadow: "1px 1px 3px rgba(15,15,15,.05)",
    pl: .5,
    fontFamily: "Bodoni-Bold"
  }
}

const formItemContainer = {
  mb: 9
}

const radioLabelStyles = {
  typography: {
    fontSize: 18,
    letterSpacing: 1.25,
    color: "text.secondary",
    textShadow: "1px 1px 3px rgba(15,15,15,.05)",
    pl: .5,
  }
}

const RsvpForm = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Box sx={{position: 'relative', mb: 10}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 16, pt: 15}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>be our guest</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={7} sx={{textAlign: "left"}}>
                <Typography sx={headerStyles}>RSVP</Typography>
                {/* <Typography sx={headerStyles}>We'd love for you to join us for our special day</Typography> */}
                {/* <Box sx={{height: "1px", width: "95%", backgroundColor: "success.main", my: .25, ml: .25, opacity: .7}}></Box>           */}
                <Box component="form" sx={{mt: 10}}>
                  <Box sx={formItemContainer}>
                    <Typography sx={labelStyles}>Name</Typography>
                    <TextField variant="standard" sx={{width: "80%"}} InputProps={inputStyles} color='secondary'/>
                  </Box>
                  <Box sx={formItemContainer}>
                    <Typography sx={labelStyles}>Would you be able to attend the occasion?</Typography>
                    <FormControl sx={{pl: .5}}>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel 
                          value="yes" 
                          control={<Radio />} 
                          label="Gladly accepts" 
                          componentsProps={radioLabelStyles} 
                        />
                        <FormControlLabel 
                          value="no" 
                          control={<Radio />} 
                          label="Can't make it" 
                          componentsProps={radioLabelStyles} 
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box sx={formItemContainer}>
                    <Typography sx={labelStyles}>How many additional guests are in your party?</Typography>
                    {/* <TextField variant="standard" sx={{width: "90%"}} InputProps={inputStyles}/> */}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Image src={image} fit="scale-down" sx={{filter: "grayscale(50%)"}}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default RsvpForm