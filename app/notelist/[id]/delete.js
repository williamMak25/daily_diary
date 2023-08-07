"use client"
import DeleteNotefetch from '@/fetchdata/deleteNotefetch';
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react'
import { useState } from 'react';

export default function DeleteNote({note}) {
  const navigate = useRouter()
  const [open,setOpen] = useState(false)
  
    const handleDelete = async (e) =>{
      e.preventDefault()
        await DeleteNotefetch(note[0]._id);
        navigate.push("/notelist")
        setOpen(false)
    }
    const handleClose = () =>{
      setOpen(false)
    }

  return (
    <div style={{display:"flex",alignItems:"start" ,justifyContent:"start",width:"100%", height:"100vh",padding:3}}>
      <div style={{borderBottom:"1px solid black",height:"450px",width:"100%"}} >
        <h4>{note[0].title}</h4>
        <p>{note[0].body}</p>
      </div>
      <button onClick={()=>setOpen(true)} style={{color:"gray"}}>Delete</button>
     
    {open ? 
    <div style={{position:"absolute",top:"40%",left:"50%",padding:"20px",backgroundColor:"whitesmoke"}}>
      <h6 style={{marginBottom:"10px"}} >Do You want to Delete?</h6>
        <button style={{marginRight:10}} onClick={handleClose}>Cancel</button>
        <button style={{marginLeft:10}} onClick={handleDelete}>Ok</button>
  </div> : null }
</div>
  )
}
