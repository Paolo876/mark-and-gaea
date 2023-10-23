import { Box } from '@mui/material'
import generateRandomNumbers from '../../helpers/generateRandomNumbers'

import LandingCarousel from '../../components/LandingCarousel'
import LandingCarouselMobile from '../../components/LandingCarouselMobile'



const Landing = () => {

  return (
    <Box sx={{maxWidth: "1900px", mx: "auto", mt: {xs: 5, sm: 6, md:8, lg:10}, position: "relative"}}>
      <Box sx={{display: {xs: "none", md: "initial"}}}>
        <LandingCarousel/>
      </Box>
      <Box sx={{display: {xs: "initial", md: "none"}}}>
        <LandingCarouselMobile/>
      </Box>
    </Box>
  )
}

export default Landing