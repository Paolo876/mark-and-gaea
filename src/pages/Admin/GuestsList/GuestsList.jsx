import React from 'react'
import { useAuthContext } from "../../../hooks/useAuthContext"
import { Container, Box, Typography, Button, Paper, Grid } from '@mui/material';
import { useLogout } from "../../../hooks/useLogout"
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'mui-image';
import GuestsListTable from './GuestsListTable';


const GuestsList = () => {
  const { logout } = useLogout();
  const { user: { displayName, email, photoURL } } = useAuthContext();

  return (
    <Container>
      {/* header */}
      <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", py: 1}}>
        <Box sx={{display: "flex", alignItems: "center", gap: 1, py: .75}}>
          <Box sx={{mr: 1}}>
            <Typography sx={{fontFamily: "Bodoni-Bold", letterSpacing: .5, fontSize: 18}}>Logged in as: </Typography>
          </Box>
          <Paper sx={{display: "flex", alignItems: "center", gap: 1, py: .75, px: 2, borderRadius: 4, minWidth: 120, justifyContent: "center", boxShadow: 0}}>

            <Box sx={{borderRadius: "50%", overflow: "hidden"}}>
              <Image src={photoURL} duration={0} height={25} width="auto" fit="scale-down"/>
            </Box>
            <Box>
              <Typography sx={{fontSize: 17, letterSpacing: .5}}>{email}</Typography>
            </Box>
          </Paper>
        </Box>
        <Button
          startIcon={<LogoutIcon/>}
          variant="contained"
          color="success"
          sx={{color: "white", fontFamily: "Bodoni-Bold", letterSpacing: 2, lineHeight: 1, px: 2, fontSize: 16, }}
          size="small"
          onClick={logout}
        >
          Logout
        </Button>
      </Box>

      {/* body */}
      <Grid container sx={{mt: 10}}>
        <Grid item xs={12}>
          <Typography sx={{fontFamily: "Bodoni-Bold", fontSize: 30, letterSpacing: 4}}>GUESTS LIST</Typography>
        </Grid>
        <Grid item xs={12} mt={3}>
          <GuestsListTable/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GuestsList