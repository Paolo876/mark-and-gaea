import React from 'react'
import { useAuthContext } from "../../hooks/useAuthContext"

//pages
import Login from './Login';
import GuestsList from './GuestsList/GuestsList';

const Admin = () => {

  const { user, authIsReady } = useAuthContext();
  
  if(authIsReady) return (
    <>
      {user ?
        <GuestsList/>
        :
        <Login/>
      }
    </>
  )
}

export default Admin