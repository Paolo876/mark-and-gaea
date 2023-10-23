import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';

const Map = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Box sx={{height: {xs: "50vh", lg:"100vh"}, position: 'relative', mt: 60}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: {xs: 8, sm: 13, md: 14, lg: 16}, pt: {xs: 8, sm: 12, md: 14, lg: 15}}} ref={ref}>
            <Typography variant="h4" sx={{fontSize: {xs: 40, sm: 45, md: 55, lg: 60}}}>map</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
})

export default Map