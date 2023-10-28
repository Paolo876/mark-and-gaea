import React from 'react'
import { Box, Typography, Grid, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';


const IamYou = () => {

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -30% 0px",
    // delay: 100,
    triggerOnce: true
  });


  return (
    <Box 
      sx={{
        // height: {xs: 600, sm: 700, md: 900, lg:1000}, 
        height: {xs: "90vh", md:"100vh"},
        // background: "rgba(255,255,255,.1)", 
        background: 'rgb(241,233,231)',
        background: '-moz-linear-gradient(0deg, rgba(241,233,231,0) 0%, rgba(241,233,231,1) 8%, rgba(241,233,231,1) 80%, rgba(241,233,231,0) 100%)',
        background: '-webkit-linear-gradient(0deg, rgba(241,233,231,0) 0%, rgba(241,233,231,1) 8%, rgba(241,233,231,1) 80%, rgba(241,233,231,0) 100%)',
        background: 'linear-gradient(0deg, rgba(241,233,231,0) 0%, rgba(241,233,231,1) 8%, rgba(241,233,231,1) 80%, rgba(241,233,231,0) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1e9e7",endColorstr="#f1e9e7",GradientType=1)',
        pt: {xs: 1.5, sm: 2, md: 3, lg: 3}
      }}
    >
      <Grid container sx={{height: "100%"}}>
        <Grid item xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", userSelect: "none"}} >
          <Typography sx={{textAlign: "center", fontSize: {xs: 14, sm: 16, md: 18, lg: 20}, letterSpacing: 2, transform: "skewX(-12deg)", opacity: .85, lineHeight: 1.65}} ref={ref}>
            <Fade
              in={inView}
              style={{ transitionDelay: "0ms"  }}
              timeout={1000}
            >
              <Box component="span" sx={{display: "block"}}>
                I am not just me;
              </Box>
            </Fade>
            <Box component="span" sx={{display: "block"}}>
              <Fade
                in={inView}
                style={{ transitionDelay: "1000ms"  }}
                timeout={600}
              >
                <Box component="span" sx={{display: "inline"}}>
                  I am you 
                </Box>
              </Fade>
              <Fade
                in={inView}
                style={{ transitionDelay: "1600ms"  }}
                timeout={800}
              >
                <Box component="span" sx={{display: "inline", ml:1}}>
                  and you are me--
                </Box>
              </Fade>
            </Box>
            <Fade
              in={inView}
              style={{ transitionDelay: "2600ms"  }}
              timeout={600}
            >
              <Box component="span" sx={{display: "inline"}}>
                We are.
              </Box>
            </Fade>
            <Fade
              in={inView}
              style={{ transitionDelay: "3400ms"  }}
              timeout={800}
            >
              <Box component="span" sx={{display: "inline", ml: 1}}>
                Hereafter.
              </Box>
            </Fade>
          </Typography>
          <Fade
                in={inView}
                style={{ transitionDelay: "3800ms"  }}
                timeout={1100}
              >
              <Box>
                <Typography sx={{textAlign: "center", fontSize: {xs: 13, sm: 14, md: 15, lg: 16}, letterSpacing: 2, transform: "skewX(-12deg)", opacity: .75, lineHeight: 1.35, mt: 2 }}>
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