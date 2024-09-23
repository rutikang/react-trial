import { Brightness4, Camera, Chat, ExitToApp, Group, Home, Inbox, Settings, Source } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export const Leftbar = ({mode, setMode}) => {
  return (
    <Box  flex={1}  sx={{display:  {xs :'none', sm :'block'} }} p={"2px"} height={'100vh'} overflow={'auto'} >
        <Box>

                <List>
          <ListItem disablePadding>
            <ListItemButton component = 'a' href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Chat />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Camera />
              </ListItemIcon>
              <ListItemText primary="Camera" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Source />
              </ListItemIcon>
              <ListItemText primary="Content" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Signout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness4 />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === 'light' ? 'dark':'light')}/>
            </ListItemButton>
          </ListItem>
          </List>
        
    </Box>
    </Box>
    
  )
}
