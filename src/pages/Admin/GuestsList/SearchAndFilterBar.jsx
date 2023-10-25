import { useState } from 'react'
import { Box, TextField, InputAdornment, IconButton, Button, Menu, MenuItem, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CancelIcon from '@mui/icons-material/Cancel';

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


  return (
    <Box sx={{mb:3, display: "flex", flexDirection: "column", gap: 2}}>
      <Box sx={{mb:0, display: "flex", flexDirection: "row", gap: 2}}>
        <Button 
          startIcon={<FilterAltIcon/>} 
          size='small' 
          variant="outlined" 
          sx={{fontFamily: "Bodoni-bold", boxShadow:1}} color="secondary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          disabled={open}
        >
          Sort & Filter
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
          <Typography>Sort:</Typography>
          {/* Recent Date, Oldest Date, alphabetical A-Z */}
          <Typography>Filter:</Typography>
          {/* attending, not attending */}
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>

        <TextField 
          color='secondary'
          size='small' 
          value={input}
          onChange={e => setInput(e.target.value)}
          sx={{boxShadow: 1, minWidth: 300, opacity: open ? .5 : 1, }}
          disabled={open}
          InputProps={{startAdornment: (
            <InputAdornment position="start">
              {input === "" ? <SearchIcon /> : <IconButton size="small" color="warning" onClick={() => setInput("")}><CancelIcon/></IconButton>}
            </InputAdornment>
          )}}
        />
      </Box>
      {/* <Paper sx={{width: "fit-content"}}>
        asdasdsad
      </Paper> */}
    </Box>
  )
}

export default SearchAndFilterBar