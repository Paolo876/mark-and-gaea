import React, { useState } from 'react'
import { Box, Typography, TextField, Divider, Radio, RadioGroup, FormControlLabel, FormControl, Alert, Button } from '@mui/material'
import { useFirestore } from "../../hooks/useFirestore"
import LoadingButton from '@mui/lab/LoadingButton';


const containerStyles = {
  backgroundColor: "background.default",
  py: 3,
  px: 5, 
  zIndex: 2
}

const boxStyles = {
  mb: 5,
}

const inputContainerStyles = {
  minWidth: {xs: 260, sm: 350},
  letterSpacing: 1,
}


const EditItem = ({ data, handleClose, guestsList }) => {
  const { updateDocument, response: { error } } = useFirestore("admin")
  const [ isLoading, setIsLoading ] = useState(false);
  const [ name, setName ] = useState(data.name)
  const [ isAttending, setIsAttending ] = useState(data.isAttending)
  const [ phone, setPhone ] = useState(data.phone)

  const handleIsAttendingChange = (value) => {
    if(value === "true") {
      setIsAttending(true)
    } else {
      setIsAttending(false)

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // update changes
    const updatedGuestsList = guestsList.map(item => {
      if(item.name === data.name && item.phone === data.phone){
        return {...item, name, isAttending, phone}
      } else {
        return item
      }
    })

    // updateDocument
    try {
      await updateDocument({guestsList: updatedGuestsList}, "guests")
      setIsLoading(false)
      handleClose()
    } catch(err) {
      setIsLoading(false)
      // error alert
    }
  }


  return (
    <Box sx={containerStyles}>
      {/* backdrop */}
      <Box sx={{zIndex: -1, height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0}} onClick={isLoading ? null : handleClose} ></Box>

      <Box>
        <Typography sx={{textTransform: "uppercase", fontSize: {xs: 19, sm: 21, md: 23, lg:25}, letterSpacing: 2, fontFamily: "Bodoni-Bold"}}>Edit</Typography>
      </Box>
      <Divider/>
      <Box mt={{xs: 4, sm: 5, md:6}}>
        <Box mb={2}>
          {error && <Alert severity="error" size="small">{error}</Alert>}
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={boxStyles}>
            <TextField
              id="name"
              label="Name"
              size="small"
              value={name}
              onChange={e => setName(e.target.value)}
              sx={inputContainerStyles}
              inputProps={{sx: {fontFamily: "Bodoni-Bold"}}}
            />
          </Box>
          <Box sx={boxStyles}>
            <TextField
              id="phone"
              label="Phone"
              size="small"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              sx={inputContainerStyles}
              inputProps={{sx: {fontFamily: "Bodoni-Bold"}}}

            />
          </Box>
          <Box sx={boxStyles}>
            <FormControl>
              <RadioGroup
                value={isAttending}
                name="isAttending"
                onChange={e => handleIsAttendingChange(e.target.value)}
              >
                <FormControlLabel value={true} control={<Radio />} label="Attending" sx={{letterSpacing: 1}}/>
                <FormControlLabel value={false} control={<Radio />} label="Not Attending" sx={{letterSpacing: 1}}/>
              </RadioGroup>
            </FormControl>
          </Box>

          <Box mt={{xs: 5, sm: 6, md:8}} sx={{display: "flex", justifyContent: "right", gap: 2}}>
            <LoadingButton
              color="secondary" 
              onClick={handleSubmit}
              loading={isLoading}
              disabled={data.name === name && data.phone === phone && data.isAttending === isAttending}
              loadingPosition="end"
              variant="contained"
              endIcon={<></>}
            >
              <span>{isLoading ? "Updating..." : "Save Changes"}</span>
            </LoadingButton>
            <Button onClick={handleClose} disabled={isLoading}>Cancel</Button>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default EditItem