
import AllNoteFetch from '@/fetchdata/allNoteFetch'
import { Box, Button, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import React from 'react'
import { DateRange, Delete } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel'
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';


export default async function ListPage() {
  const data = await AllNoteFetch();
  const allnote = data
  return (
   <Stack width="100%" height="100vh" spacing={2} padding="20px">
        <Typography variant='h2' color="blue" paddingX={3}><FactCheckTwoToneIcon fontSize='large'/> Notes</Typography>
        <Grid container spacing={2}>
        {allnote.length !== 0 ? allnote.map(note =>{
          return(
            <Box key={note._id} 
            sx={{
            bgcolor:"yellow",
            position:"relative",
            margin:2,
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            borderBottomRightRadius:20
            }}>
              
                <List disablePadding>

                  <ListItem>
                    <ListItemButton sx={{borderTopLeftRadius:40,borderTopRightRadius:40}}>
                      <ListItemIcon>
                        <TipsAndUpdatesIcon sx={{fontSize:40,color:"orangered"}}/>
                      </ListItemIcon>
                      <ListItemText primary={note.title} secondary={note.title}/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem >
                    <ListItemIcon>
                      <DateRange sx={{fontSize:40,color:"blue"}}/>
                    </ListItemIcon>
                    <ListItemText 
                    primary={new Date(note.remove_time).toLocaleTimeString()} 
                    secondary={new Date(note.remove_time).toLocaleDateString()}
                    />
                  </ListItem>

                </List>
                <Link href={`/notelist/${note._id}`} sx={{position:"absolute",top:0,right:0}} color="error">
                  <CancelIcon sx={{fontSize:'30px'}}/>
                </Link>
            </Box>
          )
        }): null}
        </Grid>
   </Stack>
  )
}
