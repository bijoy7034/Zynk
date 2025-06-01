import { GridView, Mail, MoreHoriz, Notifications, Settings } from '@mui/icons-material'
import { Avatar, Badge, Box, Button, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

function AsideHome() {
    const trendingTopics = [
    { tag: '#Minions', tweets: '97.7 K Tweets' },
    { tag: '#SeninBarokah', tweets: '87.2 K Tweets' },
    { tag: '#Texos', tweets: '122.7 K Tweets' },
    { tag: '#MUFC', tweets: '97.2 K Tweets' },
    { tag: '#Rangnick', tweets: '77.9 K Tweets' },
    { tag: '#ThxOle', tweets: '54.2 K Tweets' }
  ];
  return (
    <Box sx={{ width: 320, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mb: 3 }}>
          <IconButton sx={{ color: '#8899a6' }}>
            <GridView />
          </IconButton>
          <IconButton sx={{ color: '#8899a6' }}>
            <Mail />
          </IconButton>
          <Badge badgeContent={1} color="primary">
            <IconButton sx={{ color: '#8899a6' }}>
              <Notifications />
            </IconButton>
          </Badge>
          <Avatar sx={{ width: 32, height: 32, ml: 1 }}>Y</Avatar>
        </Box>


        <Paper elevation={0} sx={{ 
          borderRadius: 3,
          border: "0.04px solid rgb(200, 200, 200)"
        }}>
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Trend for you
              </Typography>
              <IconButton size="small" sx={{ color: '#8899a6' }}>
                <Settings />
              </IconButton>
            </Box>
            
            <Typography variant="caption" sx={{ color: '#8899a6', mb: 2, display: 'block' }}>
              TRENDING IN INDIA
            </Typography>
            
            {trendingTopics.map((topic, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {topic.tag}
                    </Typography>
                    <Typography variant="caption" sx={{  }}>
                      {topic.tweets}
                    </Typography>
                  </Box>
                  <IconButton size="small" sx={{ color: '#8899a6' }}>
                    <MoreHoriz />
                  </IconButton>
                </Box>
                {index < trendingTopics.length - 1 && (
                  <Typography variant="caption" sx={{ color: '#8899a6', display: 'block', mt: 1 }}>
                    {index === 1 ? 'NFT • TRENDING' : index === 3 ? 'FOOTBALL • TRENDING' : ''}
                  </Typography>
                )}
              </Box>
            ))}
            
            <Button
              sx={{ 
                color: '#1da1f2', 
                textTransform: 'none',
                p: 0,
                minWidth: 'auto'
              }}
            >
              Show More
            </Button>
          </Box>
        </Paper>
      </Box>
  )
}

export default AsideHome
