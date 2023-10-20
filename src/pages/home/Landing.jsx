import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'mui-image'
import Carousel from 'react-material-ui-carousel'
import generateRandomNumbers from '../../helpers/generateRandomNumbers'

//media
import image0 from "../../assets/images/webp/image0.webp"
import image1 from "../../assets/images/webp/image1.webp"
import image2 from "../../assets/images/webp/image2.webp"
import image3 from "../../assets/images/webp/image3.webp"


const images = [
  {src: image0, alt: "image0"},
  {src: image1, alt: "image1"},
  {src: image2, alt: "image2"},
  {src: image3, alt: "image3"},
]


const Landing = () => {
  const [ updatedImages, setUpdatedImages ] = useState(null)
  useEffect(() => {
    setUpdatedImages(generateRandomNumbers(4,4).map(item => images[item]))
  }, [])


  return (
    <Box sx={{maxWidth: "1900px", mx: "auto", mt: 10, position: "relative"}}>
      <Carousel
        indicators={false}
        duration={800}
        interval={4500}
        swipe={false}
        stopAutoPlayOnHover={false}
        animation="fade"
      >
        {updatedImages && updatedImages.map(item => <Box key={item.alt}>
          <Image src={item.src} alt={item.alt} sx={{filter: "grayscale(40%) opacity(.97)"}} duration={0} fit="cover" />
          {/* <Image src={item.src} alt={item.alt} sx={{filter: "grayscale(5%) opacity(1)"}} duration={0} fit="cover" /> */}
        </Box>)}
      </Carousel>
    </Box>
  )
}

export default Landing