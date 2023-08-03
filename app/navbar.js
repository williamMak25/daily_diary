import { Add, Checklist, Home, LibraryAdd } from '@mui/icons-material'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <Stack sx={{width:300,boxShadow: 3 }} padding={2} >
        <List disablePadding>
            <ListItem>
                <ListItemButton href='/createnote'>
                    <ListItemIcon>
                        <LibraryAdd/>
                    </ListItemIcon>
                    <ListItemText primary="create"/>
                </ListItemButton>
            </ListItem>
            <Divider/>

            <ListItem>
                <ListItemButton href='/notelist'>
                    <ListItemIcon>
                       <Checklist/>
                    </ListItemIcon>
                    <ListItemText primary="List"/>
                </ListItemButton>
            </ListItem>
            <Divider/>

            <ListItem>
                <ListItemButton href="/">
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItemButton>
            </ListItem>
        </List>
    </Stack>
  )
}
