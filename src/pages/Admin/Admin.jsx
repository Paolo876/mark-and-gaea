import React from 'react'
import { Box } from '@mui/material'
import { useAuthContext } from "../../hooks/useAuthContext"

//pages
import Login from './Login';

const Admin = () => {
  const { user, authIsReady } = useAuthContext();

  if(authIsReady) return (
    <>
      {user ?
        <>
          
        </>
        :
        <Login/>
      }
    </>
  )
}

export default Admin