'use client'
import DeleteNotefetch from '@/fetchdata/deleteNotefetch';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

export default function DeleteNote({note}) {
    const [open,setOpen] = useState(false);
    const navigate = useRouter();
    const handleDelete = (e) =>{
        DeleteNotefetch(note[0]._id);
        navigate.push('/notelist')
    }
    const handleClose = () =>{
        navigate.push('/notelist')
    }

  return (
    <Stack spacing={3} alignItems="start" justifyContent="start" width="100%" height="100vh" padding={3}>
      <Stack height="450px" width="100%" spacing={2} sx={{borderBottom:"1px solid black"}} >
        <Typography variant='h4'>{note[0].title}</Typography>
        <Typography variant='body1'>{note[0].body}</Typography>
      </Stack>
      <Button color='warning' variant="outlined" onClick={()=>setOpen(true)}>Delete</Button>
     
    {open ? 
    <Box sx={{position:"absolute",top:"40%",left:"50%",padding:"20px",backgroundColor:"whitesmoke"}}>
      <Typography variant="body2" marginBottom="10px">Do You want to Delete?</Typography>
        <Button size='small' variant='outlined' color='error' sx={{marginRight:10}} onClick={handleClose}>Cancel</Button>
        <Button size='small' variant='outlined' sx={{marginLeft:10}} onClick={handleDelete}>Ok</Button>
  </Box> : null }
</Stack>
  )
}
