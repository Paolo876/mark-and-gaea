import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'mui-image'
import Carousel from 'react-material-ui-carousel'
import generateRandomNumbers from '../helpers/generateRandomNumbers'
import { useAppContext } from "../hooks/useAppContext"


const RsvpCarousel = () => {
  const [ updatedImages, setUpdatedImages ] = useState(null)
  const { rsvpImages, imagekitKeys } = useAppContext();

  useEffect(() => {
    if(rsvpImages) setUpdatedImages(generateRandomNumbers(4,4).map(item => rsvpImages[item]))
  }, [rsvpImages])

  // console.log(updatedImages)
  return (
    <Carousel
      indicators={false}
      duration={900}
      interval={5500}
      swipe={false}
      stopAutoPlayOnHover={false}
      animation="fade"
    >
      {updatedImages && updatedImages.map(item => <Box key={item.name}>
        <Image src={item.url} alt={item.name} sx={{filter: "grayscale(30%) opacity(.95)", userSelect: "none", pointerEvents: "none"}} duration={0} fit="cover" urlEndpoint={imagekitKeys.urlEndpoint}/>
      </Box>)}
    </Carousel>  
  )
}

export default RsvpCarousel