import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';

const Map = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Box sx={{height: "100vh", position: 'relative', mt: 50}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 16, pt: 15}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {lg: 50}}}>Map</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default Map