import React from 'react'
import { Box, Typography, Container, Grid, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Button, } from '@mui/material';
import Image from 'mui-image';
import image from "../../assets/images/webp/image4.webp"


const descriptionStyles = {
  fontFamily: "Bodoni",
  letterSpacing: 1.25,
  fontSize: 19,
  lineHeight: 1.35,
  color: "secondary.main"
}

const labelStyles = {
  sx: {
    fontFamily: "Bodoni-Bold",
    letterSpacing: 2.5,
    fontSize: 20,
    opacity: .9,
    color: "secondary.main",
    textShadow: "1px 1px 3px rgba(15,15,15,.05)",
    pb: 1.5,
    px: .5,
  }
}

const inputStyles = {
  sx: {
    fontSize: 20,
    letterSpacing: 1,
    color: "text.secondary",
    textShadow: "1px 1px 3px rgba(15,15,15,.05)",
    pl: .5,
    fontFamily: "Bodoni-Bold",
    lineHeight: 1,
    opacity: .9
  }
}

const formItemContainer = {
  mb: 6
}

const radioLabelStyles = {
  typography: {
    fontSize: 20,
    letterSpacing: 1.5,
    color: "text.secondary",
    textShadow: "1px 1px 3px rgba(15,15,15,.05)",
    pl: .5,
    fontFamily: "Bodoni-Bold"
  }
}

const RsvpForm = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Box sx={{position: 'relative', mb: 40}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 16, pt: 15}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>be our guest</Typography>
          </Grid>
          <Grid item xs={12} sx={{textAlign: "left", mb: 1}}>
            <Typography sx={{fontSize: 35, letterSpacing: 8, fontFamily: "Bodoni-Bold", opacity: .75}}>RSVP</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={7} sx={{textAlign: "left", mt: 1}}>
                <Box component="form" sx={{display: "flex", flexDirection: "column", pr: 10, height: "100%", pb: .5}}>
                  <Box sx={formItemContainer}>
                    <TextField 
                      variant="standard" 
                      color='secondary'
                      label="Name"
                      sx={{width: "100%"}} 
                      InputProps={inputStyles} 
                      InputLabelProps={labelStyles}
                    />
                  </Box>
                  <Box sx={formItemContainer}>
                    <FormControl sx={{pl: .5}}>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel 
                          value="yes" 
                          control={<Radio />} 
                          label="I'll be there to celebrate!" 
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
                  <Box sx={{...formItemContainer, display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <Box>
                      <Typography sx={labelStyles.sx}>How many are in your party?</Typography>
                    </Box>
                    <Box sx={{width: "20%"}}>
                      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="standard" sx={{width: "100%"}} InputProps={inputStyles}/>
                    </Box>
                  </Box>
                  <Box sx={{...formItemContainer, display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <Box>
                      <Typography sx={labelStyles.sx}>Contact Number</Typography>
                    </Box>
                    <Box sx={{width: "50%"}}>
                      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}} variant="standard" sx={{width: "100%"}} InputProps={inputStyles}/>
                    </Box>
                  </Box>
                  <Box sx={formItemContainer}>
                    <Typography sx={labelStyles.sx}>
                      Any message or requests?
                      <Box component="small" sx={{opacity: .9, pl: 1, letterSpacing: 1.25, fontFamily: "Bodoni"}}>(optional)</Box>
                    </Typography>
                    <TextField color='secondary' multiline rows={3} sx={{width: "100%"}}/>
                  </Box>
                  <Box mt="auto">
                    <Button variant="contained" color="success" sx={{color: "white", fontSize: 19, letterSpacing: 4, fontFamily: "Bodoni-Bold"}} disabled>Submit</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={5} sx={{display: "flex", alignItems: "flex-start", flexDirection: "column"}}>
                <Box>
                  <Image src={image} fit="scale-down" sx={{filter: "grayscale(50%)"}}/>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{mt: 35, mx: "auto"}}>
            {/* <Typography sx={{fontSize: 25, letterSpacing: 8, fontFamily: "Bodoni-Bold", opacity: .75, mb: 5,}}>A LITTLE NOTE ON GIFTS</Typography> */}
            <Typography variant="h4" sx={{fontSize: {lg: 35}, mb: 8, letterSpacing: "initial"}}>a little note on gifts</Typography>

            <Typography sx={{fontFamily: "Bodoni", fontSize: 25, letterSpacing: .25, textAlign: "center", lineHeight: 1.4, color: "secondary.main",}}>
              <Box sx={{height: "1px", width: 20, backgroundColor: "primary.main", display: "inline-block", transform: "translateY(-8px)", mr: .5, opacity: .35}}></Box>
              Your love, laughter, and company is all we wish for on our special day. However, if you wish to delight us with a gift, just surprise us in your own way.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default RsvpForm