import { Avatar, AvatarGroup, Box,  Divider,  ImageList,  ImageListItem,  List,  ListItem,  ListItemAvatar,  ListItemText,  Typography } from '@mui/material'
import React from 'react'

export const Rightbar = () => {
  return (
    <Box  sx={{  display:  {xs :'none', sm :'block'}}} flex={2} p={'2px'} height={'100vh'} overflow={'scroll'} >
        <Box  width={300} >
            <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Online Friends </Typography>
            <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1874866/pexels-photo-1874866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant='h6' fontWeight={100} mt={2} mb={2}  >Images </Typography>

<ImageList  cols={3} rowHeight={100} gap={5}>
    

<ImageListItem>
    <img
    src='https://images.pexels.com/photos/3491674/pexels-photo-3491674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    alt=''
    />
</ImageListItem>
<ImageListItem>
    <img
    src='https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    alt=''
    />
</ImageListItem>
<ImageListItem>
    <img
    src='https://images.pexels.com/photos/1812402/pexels-photo-1812402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    alt=''
    />
</ImageListItem>

</ImageList>

<Typography variant='h6' fontWeight={100} mt={2} mb={2}  >Chat </Typography>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1874866/pexels-photo-1874866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

        </Box>
    </Box>
  )
}
