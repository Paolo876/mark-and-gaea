import React from 'react'
import { useAuthContext } from "../../hooks/useAuthContext"
import { Container, Box, Typography, Button } from '@mui/material';
import { useLogout } from "../../hooks/useLogout"
import LogoutIcon from '@mui/icons-material/Logout';

const GuestsList = () => {
  const { logout } = useLogout();
  const { user: { displayName, email, photoURL } } = useAuthContext();
  console.log({displayName, email, photoURL})


  return (
    <Container>
      <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", py: 1}}>
        <Box>
          <Typography>Logged in as: {displayName}</Typography>
        </Box>
        <Button
          startIcon={<LogoutIcon/>}
          variant="text"
          size="small"
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  )
}

export default GuestsList