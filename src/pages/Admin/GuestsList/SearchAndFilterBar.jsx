import { useState } from 'react'
import { Box, TextField, InputAdornment, IconButton, Button, Menu, MenuItem, Typography, Divider } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CancelIcon from '@mui/icons-material/Cancel';


const headerStyles = {
  fontFamily: "Bodoni-Bold"
}

const optionsStyles = {
  fontSize: 15
}


const SearchAndFilterBar = () => {
  const [ input, setInput ] = useState("");
  const [ sort, setSort ] = useState(null);
  const [ filter, setFilter ] = useState(null);
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (value) => {
    if( value === "date") {
      
    }
    if( value === "name") {

    }
  }


  return (
      <Box sx={{mb:3, mt: 1, display: "flex", flexDirection: "row", gap: 2}}>
        <Button 
          startIcon={<FilterAltIcon/>} 
          size='small' 
          variant="outlined" 
          sx={{fontFamily: "Bodoni-bold", boxShadow:1, display: {xs: "none", sm: "flex"}}} color="secondary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          disabled={open}
        >
          Sort & Filter
        </Button>
        <Button 
          size='small' 
          variant="outlined" 
          sx={{fontFamily: "Bodoni-bold", boxShadow:1, minWidth: 0, display:{sm:"none"}, px: 2.5}} color="secondary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          disabled={open}
        >
          <FilterAltIcon/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Typography sx={headerStyles}>Sort:</Typography>
          <MenuItem onClick={handleClose} sx={optionsStyles} dense>Date</MenuItem>
          <MenuItem onClick={handleClose} sx={optionsStyles} dense>Name (A-Z)</MenuItem>
          <Divider/>

          <Typography sx={headerStyles}>Filter:</Typography>
          <MenuItem onClick={handleClose} sx={optionsStyles} dense>Attending</MenuItem>
          <MenuItem onClick={handleClose} sx={optionsStyles} dense>Not Attending</MenuItem>
          <MenuItem onClick={handleClose} sx={optionsStyles} dense>With Message</MenuItem>
          <Divider/>
          <Button>Apply Changes</Button>
        </Menu>

        <TextField 
          color='secondary'
          size='small' 
          value={input}
          onChange={e => setInput(e.target.value)}
          sx={{boxShadow: 1, minWidth: {xs: "75%", sm: 300}, opacity: open ? .5 : 1, fontSize: 12}}
          disabled={open}
          InputProps={{startAdornment: (
            <InputAdornment position="start">
              {input === "" ? <SearchIcon /> : <IconButton size="small" color="warning" onClick={() => setInput("")}><CancelIcon/></IconButton>}
            </InputAdornment>
          )}}
        />
      </Box>

  )
}

export default SearchAndFilterBar