import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleLogin } from "../../hooks/useGoogleLogin"
import LoadingButton from '@mui/lab/LoadingButton';


const Login = () => {
  const { error, login, isLoading } = useGoogleLogin();
  const navigate = useNavigate();


  return (
    <Box sx={{width: "fit-content", border: 2, mx: "auto", my: 15, py: 5, px: 10}}>
      <Box>
        <Typography sx={{fontFamily: "Bodoni-Bold", fontSize: 30, letterSpacing: 4}}>LOGIN</Typography>
      </Box>
      <Box>
        <Typography>This page is reserved for the rightful owner of this site.</Typography>
        <Typography>
          <Box component="span" sx={{mr: .5, textDecoration: "underline", cursor: "pointer"}} onClick={() => navigate("/")}>Click here</Box> 
          to redirect back to the home page
        </Typography>
      </Box>
      <Box>
        <LoadingButton
          startIcon={<GoogleIcon/>}
          sx={{textTransform: "initial"}}
          variant="contained"
          color="secondary"
          onClick={login}
          loadingPosition="start"
          loading={isLoading}
        >
          Login with Google
        </LoadingButton>
      </Box>
    </Box>
  )
}

export default Login