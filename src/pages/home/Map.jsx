import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from 'mui-image';
import roadMap from "../../assets/images/bambanROADmap.svg"
const Map = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Box sx={{position: 'relative', mt: 60}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: {xs: 8, sm: 13, md: 14, lg: 16}, pt: {xs: 8, sm: 12, md: 14, lg: 15}}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {xs: 40, sm: 45, md: 55, lg: 60}}}>map</Typography>
          </Grid>

          <Grid item xs={10} sm={8} sx={{mx: "auto"}}>
            <Box>
              <Image src={roadMap} fit="cover"/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default Map