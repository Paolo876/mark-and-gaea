import { useState } from 'react'
import { Box, Typography, TextField, FormControlLabel, Button, Checkbox, Alert } from '@mui/material';
import { useFirestore } from "../hooks/useFirestore"
import { timestamp } from '../firebase/config';

import LoadingButton from '@mui/lab/LoadingButton';
import Collapse from '@mui/material/Collapse';


const labelStyles = {
  sx: {
    fontFamily: "Bodoni-Bold",
    letterSpacing: {xs: .5, sm: .7, md: .8, lg: 1},
    fontSize: {xs: 16, sm: 17, md: 18, lg: 20},
    opacity: .9,
    color: "secondary.main",
    textshadow: "1px 1px 3px rgba(15,15,15,.05)",
    pb: {sm:1.5},
    px: .5,
  }
}

const inputStyles = {
  sx: {
    fontSize: {xs: 16, sm: 17, md: 18, lg: 20},
    letterSpacing: {xs: .5, sm: .7, md: .8, lg: 1},
    color: "text.secondary",
    textshadow: "1px 1px 3px rgba(15,15,15,.05)",
    pl: .5,
    fontFamily: "Bodoni-Bold",
    lineHeight: 1,
    opacity: .9
  }
}

const formItemContainer = {
  mb: {xs:4.25, sm:6}
}

const radioLabelStyles = {
  typography: {
    fontSize: {xs: 16, sm: 17, md: 18, lg: 20},
    letterSpacing: {xs: .5, sm: .7, md: .8, lg: 1},
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

  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null)

  const { updateArrayDocument, response } = useFirestore("admin")


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
    const updatedPhone = phone.replaceAll("-", "").replaceAll("+63", "0").replaceAll(/\s/g, "")
    if(updatedPhone.match(regex)){
      setPhoneError(false)
      setPhone(updatedPhone)
    } else {
      setPhoneError(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    await updateArrayDocument('guests', 'guest-list', {name, isAttending, phone, message, createdAt: timestamp.fromDate(new Date())})
    await updateArrayDocument('guests', 'backup', {name, isAttending, phone, message, createdAt: timestamp.fromDate(new Date())})
    if(!response.error){
      setIsLoading(false)
      setIsSubmitted(true)
      setError(null)
    } else {
      setError("Server Error. Please try again later.")
    }
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
          disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            sx={{ mb: 1, fontSize: {xs: 14, sm: 14, md: 15, lg: 17}, letterSpacing: {xs: .3, sm: .5, md:.75}, py: .15, boxShadow: 1, lineHeight: 1.3, opacity: .65, transform: "skexW(-7deg)" }}
          >
            Please enter a valid phone number
          </Alert>
        </Collapse>
        <Box sx={{...formItemContainer, display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center"}}>
          <Box>
            <Typography sx={labelStyles.sx}>Contact Number</Typography>
          </Box>
          <Box sx={{width: {xs: "53%", sm: "50%"}}}>
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
              disabled={isLoading}
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
          disabled={isLoading}
          />
      </Box>
      <Box mt="auto" mx="auto">
        {/* <Button 
          type="submit"
          variant="contained" 
          color="success" 
          sx={{color: "white", fontSize: {xs: 15, sm: 17, md: 18, lg:19}, letterSpacing: 4, fontFamily: "Bodoni-Bold", px: {xs: 2.5, sm: 3, md: 4}}} 
          disabled={name === "" || isAttending === null || phoneError === true || phone === "" }
        >Submit</Button> */}
        <LoadingButton
          color="success" 
          onClick={handleSubmit}
          loading={isLoading}
          disabled={name === "" || isAttending === null || phoneError === true || phone === "" }
          loadingPosition="end"
          variant="contained"
          sx={{color: "white", fontSize: {xs: 15, sm: 17, md: 18, lg:19}, letterSpacing: 4, fontFamily: "Bodoni-Bold", px: {xs: 2.5, sm: 3, md: 4}}} 
        >
          <span>{isLoading ? "Submitting..." : "Submit"}</span>
        </LoadingButton>
      </Box>
    </Box>
  )
}

export default RsvpForm