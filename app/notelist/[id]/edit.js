"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Edit({note,setEdit}) {
    const [newTitle,setnewTitle] = useState(note.title);
    const [newBody,setnewBody] = useState(note.body)
    const router = useRouter()

    const handleEdit = async (e) => {
        e.preventDefault()
    await fetch(`http://localhost:3000/api/updateNote?id=${note._id}`,{
        method:"PUT",
        headers:{"Content-type":"Application/json"},
        body:JSON.stringify({
            title:newTitle,
            body:newBody
        })
    })
    router.refresh()
    router.push(`/notelist/${note._id}`)
    setEdit(false)
    }

  return (
    <div style={{position:"absolute",top:"10%",left:"40%",padding:"20px",backgroundColor:"#454545",color:"white"}}>
        <h4 style={{marginLeft:10}}>Edit</h4>
        <div style={{display:"flex",flexDirection:"column",overflow:"auto",padding:10,width:500}}>
            <input value={newTitle} onChange={(e)=>setnewTitle(e.target.value)} style={{height:50,padding:5,marginBottom:10}}/>
            <textarea value={newBody} onChange={(e)=>setnewBody(e.target.value)} style={{height:350,padding:5,marginBottom:10}}/>
        </div>
        <button onClick={()=>setEdit(false)} style={{marginLeft:10,marginRight:10,cursor:"pointer",color:"white",border:"none",backgroundColor:"#7676a7",width:100,height:20}} >Cancal</button>
        <button onClick={handleEdit} style={{marginRight:10,cursor:"pointer",color:"white",border:"none",backgroundColor:"#7676a7",width:100,height:20}} >Comfim</button>
    </div>
  )
}
