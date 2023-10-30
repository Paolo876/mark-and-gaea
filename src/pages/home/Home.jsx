import { useState, useEffect, createRef } from "react";
import { Box, Fade } from '@mui/material'
import { useAppContext } from '../../hooks/useAppContext'
import WelcomeLoader from '../../components/WelcomeLoader'

//page components
import Appbar from '../../components/Appbar'
import Landing from './Landing'
import IamYou from './IamYou'
import Details from './Details'
import Map from './Map'
import BeOurGuest from './BeOurGuest'

const Home = () => {
  const detailsRef = createRef();
  const mapRef = createRef();
  const rsvpRef = createRef();
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3500)
  }, [])
  const { isLoading } = useAppContext();
  
  return (
    <>
      <Fade in={!isLoaded || isLoading} timeout={{ enter: 250, exit: 900 }} >
        <Box>
          <WelcomeLoader/>
        </Box>
      </Fade>
      <Fade in={isLoaded && !isLoading} timeout={600} mountOnEnter>
        <Box>
          <Appbar detailsRef={detailsRef} mapRef={mapRef} rsvpRef={rsvpRef} />
          <Landing/>
          <IamYou/>
          <Details ref={detailsRef}/>
          <Map ref={mapRef}/>
          <BeOurGuest ref={rsvpRef}/>
        </Box>
      </Fade>
    </>


  )
}

export default Home