import {  Box } from '@mui/material'
import React from 'react'
import { Post } from './Post'

export const Feed = () => {
  return (
    <Box  flex={4} p={"2px"} height={'100vh'} overflow={'auto'} >
        
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

    </Box>
  )
}
