"use client"
import React from 'react'
import { Box, Button, FormLabel, Stack, TextField, Typography } from '@mui/material'
import { AcUnit, LightMode, TextFieldsRounded } from '@mui/icons-material'
import { DatePicker, DateTimePicker, TimeField, TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from 'react'
import AddNoteTodb from '@/fetchdata/addNoteTodb'
import { useRouter } from 'next/navigation'

export default function Creatnote() {
    const navigate = useRouter()
    const [removedate,setremoveDate] = useState(null);
    const [note,setNote] = useState({
      title:"",
      body:""
    })

    const handleChange = (e)=>{
      const {name,value} = e.target;
      setNote(prev =>({
        ...prev,
        [name]:value
      }))
    }
    const handleSubmit =(e)=>{
      e.preventDefault()
       AddNoteTodb(note,removedate);
      navigate.push("/notelist")
    }

  return ( 
<Stack width="100%" height="100vh" spacing={2} overflow="auto" padding={2}>
  <Typography variant='h3' textAlign="center">What is your's?</Typography>

  <Box sx={{width:"100%",height:"100vh",bgcolor:"white",padding:5}}>
  <Typography variant='body1'>Create Note </Typography>
    <Stack spacing={2}>
      <TextField label="test-title"
      name='title' 
      value={note.title} 
      onChange={handleChange}/>

      <TextField label="test-body" 
      multiline maxRows={6} 
      id="outlined-textarea" 
      name='body' value={note.body} 
      onChange={handleChange}/>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography variant='body1'>Remove Note time </Typography>
      
     <DatePicker
     value={removedate}
     onChange={(newvalue)=> setremoveDate(newvalue)}
     label="Date"
     />
    </LocalizationProvider>
    <Button variant='contained' onClick={handleSubmit}>Create</Button>
    </Stack>
    
  </Box>  

</Stack>
  )
}
