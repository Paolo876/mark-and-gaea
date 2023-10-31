import React, { useState } from 'react'
import { Box, Typography, TextField, Divider, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material'
import { useFirestore } from "../../hooks/useFirestore"


const containerStyles = {
  backgroundColor: "background.default",
  py: 2,
  px: 5, 
  zIndex: 2
}

const boxStyles = {
  mb: 5,
}

const inputContainerStyles = {
  minWidth: {lg: 350},
  letterSpacing: 1
}


const EditItem = ({ data, handleClose, guestsList }) => {
  const { updateDocument } = useFirestore("admin")
  const [ name, setName ] = useState(data.name)
  const [ isAttending, setIsAttending ] = useState(data.isAttending)
  const [ phone, setPhone ] = useState(data.phone)

  
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <Box sx={containerStyles}>
      <Box>
        <Typography sx={{textTransform: "uppercase", fontSize: {xs: 19, sm: 21, md: 23, lg:25}, letterSpacing: 2, fontFamily: "Bodoni-Bold"}}>Edit</Typography>
      </Box>
      <Divider/>
      <Box mt={{xs: 2.5, sm: 3, md:4}}>
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={boxStyles}>
            <TextField
              id="name"
              label="Name"
              size="small"
              value={name}
              onChange={e => setName(e.target.value)}
              sx={inputContainerStyles}
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
            />
          </Box>
          <Box sx={boxStyles}>
            <FormControl>
              <RadioGroup
                value={isAttending}
                name="isAttending"
              >
                <FormControlLabel value={true} control={<Radio />} label="Attending" />
                <FormControlLabel value={false} control={<Radio />} label="Not Attending" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box mt={{xs: 5, sm: 6, md:8}} sx={{display: "flex", justifyContent: "right", gap: 2}}>
            <Button variant="contained" color='secondary'>Save Changes</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default EditItem