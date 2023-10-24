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
    <Box sx={{width: "fit-content", border: 2, mx: {xs: 2, sm:"auto"}, my: {xs: 10, sm: 15}, py: 5, px: {xs: 3, sm:10}}}>
      <Box>
        <Typography sx={{fontFamily: "Bodoni-Bold", fontSize: 30, letterSpacing: 4}}>LOGIN</Typography>
      </Box>
      <Box sx={{mt: 4}}>
        <Typography sx={{fontSize: {xs: 15, sm: 17, md: 18}, letterSpacing: .5, }}>This page is reserved for the rightful owner of this site.</Typography>
        <Typography sx={{mt: 1, fontSize: {xs: 15, sm: 17, md: 18}, letterSpacing: .5, }}>
          <Box component="span" sx={{mr: .5, textDecoration: "underline", cursor: "pointer"}} onClick={() => navigate("/")}>Click here</Box> 
          to redirect back to the home page
        </Typography>
      </Box>
      <Box sx={{mt: 6}}>
        <LoadingButton
          startIcon={<GoogleIcon/>}
          sx={{textTransform: "initial", fontSize: 17, letterSpacing: 2, lineHeight: 1, fontFamily: "Bodoni", py: 1.5}}
          variant="contained"
          color="secondary"
          onClick={login}
          loadingPosition="start"
          loading={isLoading}
          size="large"
        >
          Login with Google
        </LoadingButton>
      </Box>
    </Box>
  )
}

export default Login