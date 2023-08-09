"use client"
import React, { useEffect } from 'react'
import { DatePicker} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function Creatnote() {
    const router = useRouter()
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
                "removedate":new Date()
            })
        })
      router.refresh()
      router.push("/notelist");

    }

  return ( 
<div style={{display:"flex",flexDirection:"column",width:"100%",height:"100vh",overflow:"auto",padding:2}}>
  <h1 style={{textAlign:"center"}}>What is your's?</h1>

  <div style={{width:"100%",height:"100vh",bgcolor:"white",padding:10}}>
  <h2 style={{margin:10}}>Create Post </h2>
    <div style={{display:"flex",flexDirection:"column",overflow:"auto",padding:10}}>
      <input placeholder='test-title'
      name='title' 
      value={note.title} 
      onChange={handleChange}
      style={{height:50,padding:5,marginBottom:10}}/>

      <textarea 
      placeholder='test-body'
      name='body' value={note.body} 
      onChange={handleChange}
      style={{height:350,padding:5,marginBottom:10}}/>
    
    <button onClick={handleSubmit} style={{width:100,height:50,cursor:"pointer",color:"white",border:"none",backgroundColor:"#7676a7"}}>Create</button>
    </div>
    
  </div>  

</div>
  )
}
