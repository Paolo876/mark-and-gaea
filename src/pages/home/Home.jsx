import { createRef } from 'react'
import Landing from './Landing'
import IamYou from './IamYou'

//page components
import Details from './Details'
import Appbar from '../../components/Appbar'
import Map from './Map'
import BeOurGuest from './BeOurGuest'
import { Box } from '@mui/material'

const Home = () => {
  const detailsRef = createRef();
  const mapRef = createRef();
  const rsvpRef = createRef();

  return (
    <Box>
      <Appbar detailsRef={detailsRef} mapRef={mapRef} rsvpRef={rsvpRef} />
      <Landing/>
      <IamYou/>
      <Details ref={detailsRef}/>
      <Map ref={mapRef}/>
      <BeOurGuest ref={rsvpRef}/>
    </Box>
  )
}

export default Home

/*

I am not just me;
I am you and you are me--
We are. Hereafter.


2. The Details

Ceremony and Reception
will be at The V Farm 
[scan QR Code for google maps] 

We request that you come in formal attire. 
Ladies: Long dress
Men: Long sleeves and black slacks
[insert palette]


 
3. RSVP
We reserved __ seats for you.

A little note on gifts
Your love, laughter and company is all we wish for on our special day. 
However, if you wish to delight us with a gift, we are registered at 
[insert qr code ng gift registry]
or just surprise us in your own way! 🫶🏼


*/