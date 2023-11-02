import React from 'react'
import { Modal, Box, IconButton } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';

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


const AdminActionModal = ({showModal, handleClose, data, action, guestsList}) => {
  return (
    <Modal open={showModal} onClose={handleClose}>
      <Box sx={containerStyle}>
        {action === "edit" && <EditItem data={data} handleClose={handleClose} guestsList={guestsList}/>}
        {action === "delete" && <DeleteItem data={data} handleClose={handleClose} guestsList={guestsList}/>}
      </Box>
    </Modal>
  )
}

export default AdminActionModal