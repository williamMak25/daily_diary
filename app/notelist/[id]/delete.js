"use client"
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react'
import { useState } from 'react';
import Edit from './edit';

export default function DeleteNote({note}) {
  const navigate = useRouter()
  const [open,setOpen] = useState(false);
  const [edit,setEdit] = useState(false)


    const handleDelete = async (e) =>{
      e.preventDefault()
        await fetch(`http://localhost:3000/api/deleteNote?id=${note._id}`,{
              method:"DELETE"})
        navigate.refresh()
        navigate.push("/notelist")
        setOpen(false)
    }
    const handleClose = () =>{
      setOpen(false)
    }

  return (
    <>
    <div style={{width:"100%", height:"100vh",padding:20}}>
      <div style={{borderBottom:"1px solid black",height:"450px",width:"100%",margin:10,overflow:"auto"}} >
        <h2 style={{marginBottom:10}}>{note.title}</h2>
        <p style={{lineHeight:2}}>{note.body}</p>
      </div>
      <div>
        <button onClick={()=>setOpen(true)} style={{cursor:"pointer",marginRight:5,border:"none",color:"white",backgroundColor:"#ff3333",width:100,height:20}}>Delete</button>
        <button onClick={()=>setEdit(true)} style={{cursor:"pointer",color:"white",border:"none",backgroundColor:"#7676a7",width:50,height:20}}>Edit</button>
      </div>
    </div>
     {edit ? <Edit note={note} setEdit={setEdit}/> : null }
     {open ? 
     <div style={{position:"absolute",top:"40%",left:"45%",width:300,padding:10,backgroundColor:"#454545",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h3 style={{marginBottom:"10px",color:"white"}} >Do You want to Delete?</h3>
        <div>
          <button style={{marginRight:10,cursor:"pointer",color:"white",border:"none",backgroundColor:"#7676a7",width:100,height:20}} onClick={handleClose}>Cancel</button>
          <button style={{marginLeft:10,cursor:"pointer",color:"white",border:"none",backgroundColor:"#7676a7",width:50,height:20}} onClick={handleDelete}>Ok</button>
        </div>
      </div> : null }
   </>
  )
}
