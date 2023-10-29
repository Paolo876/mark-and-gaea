import { Modal, Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


const containerStyle = {
  zIndex:5, 
  height: "100vh", 
  width: "100vw", 
  position: "relative", 
  display: "flex", 
  alignItems: "center", 
  flexDirection: "column",
  justifyContent: "center",
  backdropFilter: "blur(2px) contrast(90%) brightness(100%)",
};


const MessageModal = ({ handleClose, showModal, data}) => {
  return (
    <Modal open={showModal} onClose={handleClose}>
      <Box sx={containerStyle}>
        <Box sx={{zIndex: 2, height: "100vh", width: "100vw", position: "absolute"}} onClick={handleClose} ></Box>
          {data && <Box 
            sx={{
              zIndex: 5, 
              backgroundColor: "background.default", 
              maxHeight:"90vh", 
              maxWidth: {xs: "95vw", sm:"90vw", md: "80vw", lg: "70vw"}, 
              position:"relative", 
              minWidth: {xs: "90vw", sm: "80vw", lg: "40vw"},
              minHeight: {xs: 400, sm: 400},
              // p: 2,
              display: 'flex',
              flexDirection: "column",
              justifyContent: "space-between"
              }}>
            <Box sx={{fontSize: {xs: 10, sm: 11, md: 13, lg: 14}, position: "absolute", top: 0, right: 0, p: 2}}>
              <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .5}}>{data.createdAt}</Typography>
            </Box>
            <Box sx={{mt: 10, backgroundColor: "rgba(0,0,0,0.1)", flex: 1, p:2}}>
              <Typography sx={{letterSpacing: 1, fontSize: {xs: 16, sm: 16, md: 19, lg:21}, }}>{data.message}</Typography>
            </Box>
            <Box sx={{mt: 2, p: 2}}>
              <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25, fontFamily: "Bodoni-Bold"}}>- {data.name}</Typography>
              {data.isAttending ? 
                <Box sx={{display: "flex", flexDirection: "row"}}>
                  <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- Attending</Typography>
                  <CheckCircleIcon sx={{fontSize: "inherit"}} color="secondary"/>
                </Box>
               : 
                <Box>
                  <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- Not Attending</Typography>
                  <CancelIcon sx={{fontSize: "inherit"}} color="warning"/>
                </Box>
              }
              <Typography sx={{fontSize: {xs: 12, sm: 14, md: 15, lg: 17}, letterSpacing: .5, mb: .25}}>- {data.phone}</Typography>
            </Box>
          </Box>}
      </Box>
    </Modal>
  )
}

export default MessageModal