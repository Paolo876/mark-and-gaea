import React from 'react'
import { Box, Typography, Grid, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';


const IamYou = () => {

      
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -35% 0px",
    delay: 100,
    triggerOnce: true
  });


  return (
    <Box sx={{height: {xs: 600, sm: 700, md: 900, lg:1000}}}>
      <Grid container sx={{height: "100%"}}>
        <Grid item xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}} >
          <Typography sx={{textAlign: "center", fontSize: {xl: 20}, letterSpacing: 2, transform: "skewX(-12deg)", opacity: .9, lineHeight: 1.65}} ref={ref}>
            <Fade
              in={inView}
              style={{ transitionDelay: "0ms"  }}
              timeout={800}
            >
              <Box component="span" sx={{display: "block"}}>
                I am not just me;
              </Box>
            </Fade>
            <Box component="span" sx={{display: "block"}}>
              <Fade
                in={inView}
                style={{ transitionDelay: "1100ms"  }}
                timeout={600}
              >
                <Box component="span" sx={{display: "inline"}}>
                  I am you 
                </Box>
              </Fade>
              <Fade
                in={inView}
                style={{ transitionDelay: "1700ms"  }}
                timeout={600}
              >
                <Box component="span" sx={{display: "inline", ml:1}}>
                  and you are me--
                </Box>
              </Fade>
            </Box>
            <Fade
              in={inView}
              style={{ transitionDelay: "2700ms"  }}
              timeout={600}
            >
              <Box component="span" sx={{display: "block"}}>
                We are. Hereafter.
              </Box>
            </Fade>
          </Typography>
          <Fade
                in={inView}
                style={{ transitionDelay: "3800ms"  }}
                timeout={900}
              >
              <Box>
                <Typography sx={{textAlign: "center", fontSize: {xl: 16}, letterSpacing: 2, transform: "skewX(-12deg)", opacity: .75, lineHeight: 1.35, mt: 2 }}>
                  - Gaea
                </Typography>
              </Box>
            </Fade>
        </Grid>
      </Grid>
    </Box>
  )
}

export default IamYou