import { useEffect, useState } from 'react'
import { Box, TextField, InputAdornment, IconButton, Button, Menu, MenuItem, Typography, Divider } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CancelIcon from '@mui/icons-material/Cancel';


const headerStyles = {
  fontFamily: "Bodoni-Bold",
  pl: 1,
  letterSpacing: .5,
  my: .5,
}

const optionsStyles = {
  display: "flex",
  transition: "all 450ms ease",
  alignItems: "center",
  justifyContent: "space-between",
  lineHeight: 1,
  gap: 2,
  fontSize: 15,
  color: "primary.main",
  letterSpacing: .25,
  minWidth: 175,
}


const SearchAndFilterBar = ({ handleSortFilterChange, handleSearch }) => {
  const [ input, setInput ] = useState("");
  const [ sort, setSort ] = useState(null);
  const [ filter, setFilter ] = useState([]);
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSort = (value) => {
    if( value === "date") {
      if(sort === "date") {
        setSort(null)
      } else {
        setSort("date")
      }
    }
    if( value === "name") {
      if(sort === "name") {
        setSort(null)
      } else {
        setSort("name")
      }
    }
  }

  const handleFilter = (value) => {
    // attending/not attending
    if( value === "attending") {
      if(filter.includes("attending")){
        setFilter(prevState => prevState.filter(item => item !== "attending"))
      } else {
        setFilter(prevState => [...prevState.filter(item => item !== "notAttending"), "attending"])
      }
    }

    if( value === "notAttending") {
      if(filter.includes("notAttending")){
        setFilter(prevState => prevState.filter(item => item !== "notAttending"))
      } else {
        setFilter(prevState => [...prevState.filter(item => item !== "attending"), "notAttending"])
      }
    }

    // with message
    if( value === "message") {
      if(filter.includes("message")) {
        setFilter(prevState => prevState.filter(item => item !== "message"))
      } else {
        setFilter(prevState => [...prevState, "message"])
      }
    }
  }

  const handleSortFilterSubmit = (value=null) => {
    handleSortFilterChange({sort, filter, clear:value})
    if(value){
      setSort(null)
      setFilter([])
    }
    setAnchorEl(null);
  }

  useEffect(() => {
    handleSearch(input)
    if(sort !== null || filter.length !== 0) {
      setSort(null)
      setFilter([])
    }
  }, [input])


  return (
      <Box sx={{mb:3, mt: 1, display: "flex", flexDirection: "row", gap: 2}}>
        <Button 
          startIcon={<FilterAltIcon/>} 
          size='small' 
          variant="outlined" 
          sx={{fontFamily: "Bodoni-bold", boxShadow:1, display: {xs: "none", sm: "flex"}}} 
          color="secondary"
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
          sx={{boxShadow:1, minWidth: 0, display:{sm:"none"}, px: 1.5}} 
          color="secondary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          disabled={open}
        >
          <FilterAltIcon sx={{fontSize: 22}}/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Typography sx={headerStyles}>Sort:</Typography>
          <MenuItem 
            onClick={() => handleSort("date")} 
            sx={{
              ...optionsStyles, 
              fontFamily: sort === "date" ? "Bodoni-Bold" : "Bodoni",
              color: sort === "date" ? "secondary.main" : "primary.main",
            }} 
            dense
          >
            Date
            {sort === "date" && <CheckCircleIcon sx={{color: "green", fontSize: "inherit"}}/>}
          </MenuItem>
          <MenuItem 
            onClick={() => handleSort("name")} 
            sx={{
              ...optionsStyles, 
              fontFamily: sort === "name" ? "Bodoni-Bold" : "Bodoni",
              color: sort === "name" ? "secondary.main" : "primary.main",
            }}
            dense
          >
            Name (A-Z)
            {sort === "name" && <CheckCircleIcon sx={{color: "green", fontSize: "inherit"}}/>}
          </MenuItem>
          <Divider/>

          <Typography sx={headerStyles}>Filter:</Typography>
          <MenuItem 
            onClick={() => handleFilter("attending")} 
            sx={{
              ...optionsStyles, 
              fontFamily: filter.includes("attending") ? "Bodoni-Bold" : "Bodoni",
              color: filter.includes("attending") ? "secondary.main" : "primary.main",
            }}
            dense
          >
            Attending
            {filter.includes("attending") && <CheckCircleIcon sx={{color: "green", fontSize: "inherit"}}/>}
          </MenuItem>
          <MenuItem 
            onClick={() => handleFilter("notAttending")} 
            sx={{
              ...optionsStyles, 
              fontFamily: filter.includes("notAttending") ? "Bodoni-Bold" : "Bodoni",
              color: filter.includes("notAttending") ? "secondary.main" : "primary.main",
            }}
            dense
          >
            Not Attending
            {filter.includes("notAttending") && <CheckCircleIcon sx={{color: "green", fontSize: "inherit"}}/>}
          </MenuItem>
          <MenuItem 
            onClick={() => handleFilter("message")} 
            sx={{
              ...optionsStyles, 
              fontFamily: filter.includes("message") ? "Bodoni-Bold" : "Bodoni",
              color: filter.includes("message") ? "secondary.main" : "primary.main",
            }}
            dense
          >
            With Message
            {filter.includes("message") && <CheckCircleIcon sx={{color: "green", fontSize: "inherit"}}/>}
          </MenuItem>
          <Divider/>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", mt: 3, flexDirection: "column", gap: 4}}>
            <Button variant="contained" color="secondary" size="small" onClick={() => handleSortFilterSubmit(false)} sx={{letterSpacing: 1}}>Apply Changes</Button>
            {<Button variant="contained" color="warning" size="small" onClick={() => handleSortFilterSubmit(true)} sx={{letterSpacing: 1}}>Reset</Button>}
          </Box>
        </Menu>

        <TextField 
          color='secondary'
          size='small' 
          value={input}
          onChange={e => setInput(e.target.value)}
          sx={{boxShadow: 1, minWidth: {xs: "82%", sm: 300}, opacity: open ? .5 : 1, fontSize: 12}}
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