import { useState, useEffect } from 'react'
import { Box, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Button, Checkbox } from '@mui/material';


const labelStyles = {
  sx: {
    fontFamily: "Bodoni-Bold",
    letterSpacing: 1,
    fontSize: 20,
    opacity: .9,
    color: "secondary.main",
    textshadow: "1px 1px 3px rgba(15,15,15,.05)",
    pb: 1.5,
    px: .5,
  }
}

const inputStyles = {
  sx: {
    fontSize: 20,
    letterSpacing: 1,
    color: "text.secondary",
    textshadow: "1px 1px 3px rgba(15,15,15,.05)",
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
    letterSpacing: 1.25,
    color: "text.secondary",
    textshadow: "1px 1px 3px rgba(15,15,15,.05)",
    pl: .5,
    fontFamily: "Bodoni-Bold"
  }
}


const RsvpForm = () => {
  const [ name, setName ] = useState("");
  const [ isAttending, setIsAttending ] = useState(null);
  const [ isGoing, setIsGoing ] = useState(null);
  const [ isNotGoing, setIsNotGoing ] = useState(null);

  const [ message, setMessage ] = useState("");

  const handleIsAttendingChange = e => {
    const { value, checked } = e.target
    if(value === "isGoing") {
      if(checked){
        setIsGoing(true)
        setIsAttending(true)
        setIsNotGoing(false)
      } else {
        setIsGoing(null)
        setIsNotGoing(null)
        setIsAttending(null)
      }
    }
    if(value === "isNotGoing") {
      if(checked){
        setIsNotGoing(true)
        setIsGoing(false)
        setIsAttending(false)
      } else {
        setIsGoing(null)
        setIsNotGoing(null)
        setIsAttending(null)
      }
    }
  }

  const handlePhoneNumberChange = () => {
    
  }

  console.log(isGoing && isNotGoing === null)
  return (
    <Box component="form" sx={{display: "flex", flexDirection: "column", pr: 10, height: "100%", pb: .5}}>
      <Box sx={formItemContainer}>
        <TextField 
          variant="standard" 
          color='secondary'
          label="Name"
          sx={{width: "100%"}} 
          InputProps={inputStyles} 
          InputLabelProps={labelStyles}
          spellCheck={false}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Box>
      <Box sx={formItemContainer}>
        <Box sx={{display: "flex", flexDirection:"column"}}>
          <FormControlLabel
            label="I'll be there to celebrate!"
            color="primary"
            value="isGoing"
            componentsProps={radioLabelStyles} 
            onChange={handleIsAttendingChange}
            checked={isGoing}
            sx={{
              opacity: (isGoing === null || isGoing ) ? 1 : .5,
              transition: "all 250ms ease",
              transform: isGoing ? "scale(1.025) translateX(.35em)" : "scale(1)"
            }}
            control={
              <Checkbox
                variant="primary"
                color="success"
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            }
          />
          <FormControlLabel
            label="Can't make it"
            color="primary"
            value="isNotGoing"
            componentsProps={radioLabelStyles} 
            onChange={handleIsAttendingChange}
            checked={isNotGoing}
            sx={{
              opacity: (isNotGoing === null || isNotGoing ) ? 1 : .5,
              transition: "all 250ms ease",
              transform: isNotGoing ? "scale(1.025) translateX(.35em)" : "scale(1)"
            }}            
            control={
              <Checkbox
                variant="primary"
                color="primary"
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              />
            }
          />
        </Box>
        {/* <FormControl sx={{pl: .5}}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={isGoing}
            onChange={e => setIsGoing(e.target.value)}
          >

            <FormControlLabel 
              value={true} 
              control={<Radio />} 
              label="I'll be there to celebrate!" 
              componentsProps={radioLabelStyles} 
            />
            <FormControlLabel 
              value={false} 
              control={<Radio />} 
              label="Can't make it" 
              componentsProps={radioLabelStyles} 
            />
          </RadioGroup>
        </FormControl> */}
      </Box>
      {/* <Box sx={{...formItemContainer, display: "flex", justifyContent: "space-between", width: "100%"}}>
        <Box>
          <Typography sx={labelStyles.sx}>How many are in your party?</Typography>
        </Box>
        <Box sx={{width: "20%"}}>
          <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="standard" sx={{width: "100%"}} InputProps={inputStyles} spellCheck={false}/>
        </Box>
      </Box> */}
      <Box sx={{...formItemContainer, display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center"}}>
        <Box>
          <Typography sx={labelStyles.sx}>Contact Number</Typography>
        </Box>
        <Box sx={{width: "50%"}}>
          <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}} variant="standard" sx={{width: "100%"}} InputProps={inputStyles} spellCheck={false}/>
        </Box>
      </Box>
      <Box sx={formItemContainer}>
        <Typography sx={labelStyles.sx}>
          Any message or requests?
          <Box component="small" sx={{opacity: .9, pl: 1, letterSpacing: 1.25, fontFamily: "Bodoni"}}>(optional)</Box>
        </Typography>
        <TextField 
          color='secondary' 
          multiline 
          rows={3} 
          sx={{width: "100%", letterSpacing: 1}} 
          spellCheck={false}
          value={message}
          onChange={e => setMessage(e.target.value)}
          />
      </Box>
      <Box mt="auto" mx="auto">
        <Button variant="contained" color="success" sx={{color: "white", fontSize: 19, letterSpacing: 4, fontFamily: "Bodoni-Bold", px: 4}} disabled>Submit</Button>
      </Box>
    </Box>
  )
}

export default RsvpForm