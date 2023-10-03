import React from 'react'
import { Container } from '@mui/material'
import Landing from './Landing'
import IamYou from './IamYou'

const Home = () => {
  return (
    <Container>
      <Landing/>
      <IamYou/>
    </Container>
  )
}

export default Home