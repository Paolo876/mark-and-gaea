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
  mb: 7
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
          <Grid item xs={12} sx={{textAlign: "left", mb: 1}}>
            <Typography sx={{fontSize: 35, letterSpacing: 6, fontFamily: "Bodoni-Bold", opacity: .85}}>RSVP</Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={7.5} sx={{textAlign: "left", mt: 1}}>
                <Box component="form" sx={{display: "flex", flexDirection: "column", pr: 10}}>
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
                    <Typography sx={labelStyles.sx}>Would you be able to attend the occasion?</Typography>
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
                  <Box sx={{...formItemContainer, display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <Typography sx={labelStyles.sx}>How many are in your party?</Typography>
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="standard"/>
                  </Box>
                  <Box sx={{...formItemContainer, display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <Typography sx={labelStyles.sx}>Contact Number</Typography>
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}} variant="standard" InputProps={{sx: {width: "100%"}}}/>
                  </Box>
                  <Box sx={formItemContainer}>
                    <Typography sx={labelStyles.sx}>
                      Any message or requests?
                      <Box component="small" sx={{opacity: .9, pl: 1, letterSpacing: 1.25, fontFamily: "Bodoni"}}>(optional)</Box>
                    </Typography>
                    <TextField color='secondary' multiline rows={3} sx={{width: "100%"}} value="di pa tapos to ha. nabusy ako sa homeworks knina e, aadjust ko pa sizing ng inputs hehehe ----pao"/>
                  </Box>
                </Box>
                <Box>
                  <Button variant="contained" color="success" sx={{color: "white", fontSize: 18, letterSpacing: 1, fontFamily: "Bodoni-Bold"}}>Submit</Button>
                </Box>
              </Grid>
              <Grid item xs={4.5} sx={{display: "flex", alignItems: "flex-start", flexDirection: "column"}}>
                <Box>
                  <Image src={image} fit="scale-down" sx={{filter: "grayscale(50%)"}}/>
                </Box>
                <Box sx={{textAlign: "left"}}>
                  <Typography sx={descriptionStyles}>
                    Your love, laughter, and company is all we wish for on our special day. However, if you wish to delight us with a gift, just surprise us in your own way.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default RsvpForm