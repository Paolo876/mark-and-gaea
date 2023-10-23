import React from 'react'
import { Box, Typography, Fade } from '@mui/material'

const textStyles = {
  fontSize: 18, 
  letterSpacing: 6, 
  opacity: .85
}

const dividerStyles = {
  fontSize: 17, 
  letterSpacing: 6, 
  opacity: .6, 
  transform: "translateY(-12%)", 
  px: 1
}


const WelcomeLoader = ({ isLoaded }) => {
  return (
    <Box sx={{position: "fixed", zIndex: 100, height: "100vh", width: "100%", backgroundColor: "background.default"}}>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "80%"}}>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Fade
            in={true}
            style={{ transitionDelay: "200ms"  }}
            timeout={900}
          >
            <Box>
              <Typography sx={textStyles}>12</Typography>
            </Box>
          </Fade>

          <Fade
            in={true}
            style={{ transitionDelay: "1300ms"  }}
            timeout={900}
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
            timeout={900}
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