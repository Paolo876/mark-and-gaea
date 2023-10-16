import { Box } from '@mui/material'
import Image from 'mui-image'
import Carousel from 'react-material-ui-carousel'

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


  return (
    <Box sx={{maxWidth: "100vw", mx: "auto", mt: 10, position: "relative"}}>
      <Carousel
        indicators={false}
        duration={500}
        interval={4000}
        swipe={false}
        stopAutoPlayOnHover={true}
        animation="fade"
      >
        {images.map(item => <Box key={item.alt}>
          <Image src={item.src} alt={item.alt} sx={{filter: "grayscale(25%) opacity(.85)"}} duration={0}/>
        </Box>)}
      </Carousel>
    </Box>
  )
}

export default Landing