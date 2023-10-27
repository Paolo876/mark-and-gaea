import { Box, Fade } from '@mui/material'

import LandingCarousel from '../../components/LandingCarousel'
import LandingCarouselMobile from '../../components/LandingCarouselMobile'



const Landing = () => {

  return (
    <Fade
      in={true}
      style={{ transitionDelay: "1600ms"  }}
      timeout={900}
    >
      <Box sx={{width: "100%", background: "rgba(25,25,25,.05)", px: "auto", minHeight: {xs: 220, sm: 400, md: 420, lg: 450}}}>
        <Box sx={{maxWidth: "1800px", mx: "auto", mt: {xs: 10, sm: 12, md:12, lg:4}, position: "relative"}}>
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