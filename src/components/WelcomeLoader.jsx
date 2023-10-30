import { Box, Typography, Fade } from '@mui/material'

const textStyles = {
  fontSize: {xs: 10, sm: 11, md: 12, lg: 13}, 
  letterSpacing: 3.5, 
  opacity: .5
}

const dividerStyles = {
  fontSize: {xs: 13, sm:15, md: 16, lg:17}, 
  letterSpacing: 6, 
  opacity: .7, 
  transform: {xs:"translateY(-29%)", sm:"translateY(-28%)", md:"translateY(-33%)", lg:"translateY(-27%)"}, 
  px: {xs: .5, sm: .7, lg: .75}
}


const WelcomeLoader = () => {
  return (
    <Box sx={{position: "fixed", zIndex: 100, height: "100vh", width: "100%", backgroundColor: "background.default", top: 0, left: 0}}>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "85%"}}>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Fade
            in={true}
            style={{ transitionDelay: "150ms"  }}
            timeout={900}
          >
            <Box>
              <Typography sx={textStyles}>12</Typography>
            </Box>
          </Fade>

          <Fade
            in={true}
            style={{ transitionDelay: "1300ms"  }}
            timeout={1100}
          >
            <Box>
            <Typography sx={dividerStyles}>.</Typography>
            </Box>
          </Fade>

          <Fade
            in={true}
            style={{ transitionDelay: "650ms"  }}
            timeout={900}
          >
            <Box>
              <Typography sx={textStyles}>22</Typography>
            </Box>
          </Fade>

          <Fade
            in={true}
            style={{ transitionDelay: "1300ms"  }}
            timeout={1100}
          >
            <Box>
            <Typography sx={dividerStyles}>.</Typography>
            </Box>
          </Fade>
          
          <Fade
            in={true}
            style={{ transitionDelay: "1100ms"  }}
            timeout={900}
          >
            <Box>
              <Typography sx={textStyles}>23</Typography>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  )
}

export default WelcomeLoader