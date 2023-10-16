import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';

const Details = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{height: "110vh", position: 'relative'}}>
        <Grid container>
          <Grid item xs={12} sx={{mb: 15}}>
            <Typography variant="h4" >Details</Typography>
          </Grid>

          {/* ceremony */}
          <Grid item xs={12} mb={2}>
            <Grid container>
              <Grid item xs={3}>
                <Typography >Ceremony</Typography>
              </Grid>
              <Grid item xs={9}  sx={{borderLeft: 1, borderColor: "text.secondary"}}>
                <Typography>Ceremony starts at 4:00 in the afternoon at the garden.</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* ceremony */}
          <Grid item xs={12} mb={2}>
            <Grid container>
              <Grid item xs={3}>
                <Typography>Reception</Typography>
              </Grid>
              <Grid item xs={9}  sx={{borderLeft: 1, borderColor: "text.secondary"}}>
                <Typography>Reception follows after the ceremony at "The Shed" in V-Farm.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Details