import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'mui-image'
import Carousel from 'react-material-ui-carousel'
import generateRandomNumbers from '../helpers/generateRandomNumbers'
import { useAppContext } from "../hooks/useAppContext"

//media
// import image0 from "../assets/images/webp/landing-images/mobile/image0.webp"
// import image1 from "../assets/images/webp/landing-images/mobile/image1.webp"
// import image2 from "../assets/images/webp/landing-images/mobile/image2.webp"
// import image3 from "../assets/images/webp/landing-images/mobile/image3.webp"
// import image4 from "../assets/images/webp/landing-images/mobile/image4.webp"
// import image5 from "../assets/images/webp/landing-images/mobile/image5.webp"

// const images = [
//   {src: image0, alt: "image0"},
//   {src: image1, alt: "image1"},
//   {src: image2, alt: "image2"},
//   {src: image3, alt: "image3"},
//   {src: image4, alt: "image4"},
//   {src: image5, alt: "image5"},
// ]


const LandingCarouselMobile = () => {
  const [ updatedImages, setUpdatedImages ] = useState(null)
  const { mobileLandingImages, imagekitKeys } = useAppContext();

  useEffect(() => {
    if(mobileLandingImages) setUpdatedImages(generateRandomNumbers(6,6).map(item => mobileLandingImages[item]))
  }, [mobileLandingImages])
  // useEffect(() => {
  //   setUpdatedImages(generateRandomNumbers(6,6).map(item => images[item]))
  // }, [])

  return (
    <Carousel
      indicators={false}
      duration={800}
      interval={4800}
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

export default LandingCarouselMobile