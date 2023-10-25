import React from 'react'
import { useAuthContext } from "../../../hooks/useAuthContext"
import { Container, Box, Typography, Button, Paper, Grid, CircularProgress, Alert } from '@mui/material';
import { useLogout } from "../../../hooks/useLogout"
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'mui-image';
import GuestsListTable from './GuestsListTable';
import { useDocument } from "../../../hooks/useDocuments"


const GuestsList = () => {
  const { logout } = useLogout();
  const { user: { email, photoURL } } = useAuthContext();
  const { document, error, isLoading } = useDocument("admin", "guests");
  
  return (
    <Container>
      {/* header */}
      <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", py: 1}}>
        <Box sx={{display: "flex", alignItems: "center", gap: 1, py: .75}}>
          <Box sx={{mr: 1, display: {xs: "none", sm: "initial"}}}>
            <Typography sx={{fontFamily: "Bodoni-Bold", letterSpacing: .5, fontSize: 18}}>Logged in as: </Typography>
          </Box>
          <Paper sx={{display: "flex", alignItems: "center", gap: 1, py: .75, px: 2, borderRadius: 4, minWidth: 120, justifyContent: "center", boxShadow: 0}}>
            <Box sx={{borderRadius: "50%", overflow: "hidden"}}>
              <Image src={photoURL} duration={0} height={25} width="auto" fit="scale-down"/>
            </Box>
            <Box>
              <Typography sx={{fontSize: {xs: 12, sm: 15, md: 16, lg:17}, letterSpacing: {sm:.5}}}>{email}</Typography>
            </Box>
          </Paper>
        </Box>
        <Button
          startIcon={<LogoutIcon/>}
          variant="contained"
          color="success"
          sx={{color: "white", fontFamily: {xs: "Bodoni", sm:"Bodoni-Bold"}, letterSpacing: {xs: .5, sm: 1.5, md:2}, lineHeight: 1, px: 2, fontSize: {xs: 12, sm: 15.5, md: 16}, }}
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
          {error && <Alert severity="warning" sx={{letterSpacing: 1, fontFamily: "bodoni-bold", fontSize: {xs: 12, sm: 15.5, md: 16, lg:17}}}>Failed to retrieve data: User not authorized.</Alert>}
          {isLoading && <CircularProgress />}
          {!error && !isLoading && document && <GuestsListTable guestsList={document.guestsList}/>}
        </Grid>
      </Grid>
    </Container>
  )
}

export default GuestsList