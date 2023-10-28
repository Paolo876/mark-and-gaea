import { useState } from 'react'
import { Modal, Box } from '@mui/material'
import Image from 'mui-image';

const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "background.default",
  height: "100%",
  width: "100%",
  // maxHeight: "95vh",
  // maxWidth: "95vw",
};


const ImageModal = ({ handleClose, showModal, img}) => {

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Box sx={{height: "100%", width: "100%",   }}>
          <Image src={img} duration={0} fit="cover" sx={{maxHeight: "95vh",
  maxWidth: "95vw",}}/>
        </Box>
      </Box>
    </Modal>
  )
}

export default ImageModal