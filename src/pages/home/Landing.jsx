import { Box, Fade } from '@mui/material'

import LandingCarousel from '../../components/LandingCarousel'
import LandingCarouselMobile from '../../components/LandingCarouselMobile'



const Landing = () => {

  return (
    <Fade
      in={true}
      style={{ transitionDelay: "1400ms"  }}
      timeout={900}
    >
      <Box sx={{width: "100%", background: "rgba(25,25,25,.05)", px: "auto", minHeight: {xs: 220, sm: 500, md: 600, lg: 600}}}>
        <Box sx={{maxWidth: "1800px", mx: "auto", mt: {xs: 5, sm: 10, md:8, lg:4}, position: "relative"}}>
          <Box sx={{display: {xs: "none", md: "initial"}}}>
            <LandingCarousel/>
          </Box>
          <Box sx={{display: {xs: "initial", md: "none"}}}>
            <LandingCarouselMobile/>
          </Box>
        </Box>
      </Box>
    </Fade>

  )
}

export default Landing