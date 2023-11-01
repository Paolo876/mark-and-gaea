import React, { useState } from 'react'
import { Box, Typography, TextField, Divider, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material'
import { useFirestore } from "../../hooks/useFirestore"


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
  const { updateDocument, response: { document, error, isLoading, success } } = useFirestore("admin")
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // update changes
    const updatedGuestsList = guestsList.map(item => {
      if(item.name === data.name && item.phone === data.phone){
        return {...item, name, isAttending, phone}
      } else {
        return item
      }
    })

    // updateDocument
    
    //closeModal
    // console.log(data, name, isAttending, phone)
  }


  return (
    <Box sx={containerStyles}>
      <Box>
        <Typography sx={{textTransform: "uppercase", fontSize: {xs: 19, sm: 21, md: 23, lg:25}, letterSpacing: 2, fontFamily: "Bodoni-Bold"}}>Edit</Typography>
      </Box>
      <Divider/>
      <Box mt={{xs: 4, sm: 5, md:6}}>
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
            <Button 
              variant="contained" 
              color='secondary'
              disabled={data.name === name && data.phone === phone && data.isAttending === isAttending}
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default EditItem