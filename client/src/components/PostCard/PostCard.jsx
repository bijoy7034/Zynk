import { ChatBubbleOutline, FavoriteBorder, MoreHoriz, Person, Repeat, Share, Verified } from '@mui/icons-material'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import React from 'react'

function PostCard() {
  return (
    <Box sx={{ border: "0.04px solid rgb(200, 200, 200)", m: 2, p:2, borderRadius:3 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar sx={{ width: 48, height: 48 }}>
              <Person />
            </Avatar>
            
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Elon Musk
                </Typography>
                <Verified sx={{ color: '#1da1f2', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#8899a6' }}>
                  @elonmusk
                </Typography>
                <Typography variant="body2" sx={{ color: '#8899a6' }}>
                  · Few minutes ago
                </Typography>
                <IconButton size="small" sx={{ ml: 'auto', color: '#8899a6' }}>
                  <MoreHoriz />
                </IconButton>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                Let's set an age limit after which you can't run for political office, 
                perhaps a number just below 70 ...
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Avatar sx={{ width: 20, height: 20, fontSize: 12 }}>❤️</Avatar>
                  <Avatar sx={{ width: 20, height: 20, fontSize: 12 }}>👍</Avatar>
                  <Avatar sx={{ width: 20, height: 20, fontSize: 12 }}>👏</Avatar>
                </Box>
                <Typography variant="body2" sx={{ color: '#8899a6' }}>
                  241k
                </Typography>
                <Typography variant="body2" sx={{ color: '#8899a6', ml: 'auto' }}>
                  45 Comments
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 400 }}>
                <IconButton sx={{ color: '#8899a6' }}>
                  <ChatBubbleOutline />
                </IconButton>
                <IconButton sx={{ color: '#8899a6' }}>
                  <Repeat />
                </IconButton>
                <IconButton sx={{ color: '#8899a6' }}>
                  <FavoriteBorder />
                </IconButton>
                <IconButton sx={{ color: '#8899a6' }}>
                  <Share />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
  )
}

export default PostCard
