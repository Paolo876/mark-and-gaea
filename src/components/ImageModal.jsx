import { Modal, Box, IconButton } from '@mui/material'
import Image from 'mui-image';
import CloseIcon from '@mui/icons-material/Close';


const containerStyle = {
  zIndex:5, 
  height: "100vh", 
  width: "100vw", 
  position: "relative", 
  display: "flex", 
  alignItems: "center", 
  flexDirection: "column",
  justifyContent: "center",
  backdropFilter: "blur(2px) contrast(80%) brightness(50%)",
};


const ImageModal = ({ handleClose, showModal, img}) => {

  return (
    <Modal open={showModal} onClose={handleClose}>
      <Box sx={containerStyle}>
        <Box sx={{zIndex: 2, height: "100vh", width: "100vw", position: "absolute"}} onClick={handleClose} ></Box>
        <Box sx={{zIndex: 5, backgroundColor: "background.default", height: {xs: "auto", lg:"100%"}, width:{xs: "100%", lg:"auto"}, maxHeight:"90vh", maxWidth: {xs: "95vw", sm:"90vw"}, position:"relative"}}>
          <Box
            sx={{
              position:"absolute",
              right:0,
              top:0,
              zIndex: 10
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                // backgroundColor: "rgba(0,0,0,0.75)",
                color: "warning.main"
              }}
            ><CloseIcon/></IconButton>
          </Box>
          <Image src={img} duration={0} fit="contain"/>
        </Box>
      </Box>
    </Modal>
  )
}

export default ImageModal