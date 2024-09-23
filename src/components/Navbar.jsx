import { ConnectWithoutContact, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
 
export const Navbar = () => {

  const [open , setOpen] = useState(false)

  const Styledtoolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between"
  })

  const Search = styled(Box)({
    // backgroundColor:'white',
    
  })

  const IconWrap = styled(Box)({
    
    
    gap: '10px',
    alignItems: 'center',
    
    
  })

  const User = styled(Box)({
    
    gap: '10px',
    alignItems: 'center',
    
    
  })

  

  return (
    <Box sx={{mb:8}}>
<AppBar position='fixed' sx={{bgcolor:'#0f8a44'}}> 
            <Styledtoolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}> Friendly</Typography>
        <ConnectWithoutContact sx={{display:{xs:"block", sm:"none"}}}/>
        < Search bgcolor={"background.default"} color={'text.primary'} sx= {{padding:"0 10px",borderRadius:"10px", width:"40%"}}><InputBase placeholder='Search....' /></Search>
        <IconWrap sx={{display:{xs:"none", sm:"flex"}}}>
        <Badge badgeContent={4} color="error">
         <Mail color="bright" />
        </Badge>  
        <Badge badgeContent={1} color="error">
         <Notifications  />
        </Badge>  

        <Avatar onClick = {e=>setOpen(true)} sx={{width:'30px', height:'30px'}} alt="Dan Kasi" src="https://images.unsplash.com/photo-1683135027247-c407c9e4bfbb?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        </IconWrap>

        <User sx={{ display:{xs:'flex', sm:'none'}}} onClick = {e=>setOpen(true)} >
        <Avatar sx={{width:'30px', height:'30px'}} alt="Dan Kasi" src="https://images.unsplash.com/photo-1683135027247-c407c9e4bfbb?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Typography variant='text'>Daniel</Typography>
        </User>
        </Styledtoolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

        </AppBar>
        </Box>  )
}

