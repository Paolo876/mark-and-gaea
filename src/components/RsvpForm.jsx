import { useState, useEffect } from 'react'
import { Box, Typography, TextField, FormControlLabel, FormControl, Button, Checkbox, Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';


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


const RsvpForm = ({ setIsSubmitted }) => {
  const [ name, setName ] = useState("");

  const [ isAttending, setIsAttending ] = useState(null);
  const [ isGoing, setIsGoing ] = useState(null);
  const [ isNotGoing, setIsNotGoing ] = useState(null);

  const [ phone, setPhone ] = useState("")
  const [ phoneError, setPhoneError ] = useState(false);

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

  const validateNumber = () => {
    const regex = new RegExp(/^(09|\+639)\d{9}$/)
    const updatedPhone = phone.replaceAll("-", "").replaceAll(/\s/g, "")
    if(updatedPhone.match(regex)){
      setPhoneError(false)
      setPhone(updatedPhone)
    } else {
      setPhoneError(true)
      console.log("no")
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, isAttending, phone, message)
    setIsSubmitted(true)
  }

  return (
    <Box component="form" sx={{display: "flex", flexDirection: "column", height: "100%", pb: .5}} onSubmit={handleSubmit}>
      <Box sx={formItemContainer}>
        <TextField 
          variant="standard" 
          color='secondary'
          label="Name"
          sx={{width: "100%"}}
          inputProps={{ maxLength: 50}} 
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
      </Box>
      <Box>
        <Collapse in={phoneError}>
          <Alert
            severity='error'
            sx={{ mb: 1, fontSize: 17, letterSpacing: .75, py: .15, boxShadow: 1, lineHeight: 1.3, opacity: .85 }}
          >
            Please enter a valid phone number
          </Alert>
        </Collapse>
        <Box sx={{...formItemContainer, display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center"}}>
          <Box>
            <Typography sx={labelStyles.sx}>Contact Number</Typography>
          </Box>
          <Box sx={{width: "50%"}}>
            <TextField 
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 13}} 
              variant="standard" 
              sx={{width: "100%"}}
              onBlur={validateNumber}
              InputProps={inputStyles} 
              error={phoneError}
              spellCheck={false}
              onChange={e => setPhone(e.target.value)}
              value={phone}
            />
          </Box>
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
        <Button 
          type="submit"
          variant="contained" 
          color="success" 
          sx={{color: "white", fontSize: 19, letterSpacing: 4, fontFamily: "Bodoni-Bold", px: 4}} 
          disabled={name === "" || isAttending === null || phoneError === true || phone === "" }
        >Submit</Button>
      </Box>
    </Box>
  )
}

export default RsvpForm