import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';

const Details = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{height: "110vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" >Details</Typography>
          </Grid>
          <Grid>
            
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Details