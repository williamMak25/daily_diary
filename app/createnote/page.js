"use client"
import React, { useEffect } from 'react'
import { DatePicker} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function Creatnote() {
    const router = useRouter()
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
    const handleSubmit = async (e)=>{
      e.preventDefault()
      await fetch("http://localhost:3000/api/postNote",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                "title":note.title,
                "body":note.body,
                "removedate":removedate
            })
        })
      router.refresh()
      router.push("/notelist");

    }

  return ( 
<div style={{display:"flex",width:"100%",height:"100vh",overflow:"auto",padding:2}}>
  <h3 style={{textAlign:"center"}}>What is your's?</h3>

  <div style={{width:"100%",height:"100vh",bgcolor:"white",padding:5}}>
  <h6>Create Note </h6>
    <div style={{overflow:"auto",padding:2}}>
      <input placeholder='test-title'
      name='title' 
      value={note.title} 
      onChange={handleChange}/>

      <input 
      placeholder='test-body'
      name='body' value={note.body} 
      onChange={handleChange}/>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <h6 variant='body1'>Remove Note time </h6>
      
     <DatePicker
     value={removedate}
     onChange={(newvalue)=> setremoveDate(newvalue)}
     label="Date"
     />
    </LocalizationProvider>
    <button variant='contained' onClick={handleSubmit}>Create</button>
    </div>
    
  </div>  

</div>
  )
}
