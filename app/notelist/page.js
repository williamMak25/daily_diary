"use client"
import Link from 'next/link';

import React, { useEffect, useState } from 'react'

export default function ListPage() {
  const [allnote,setAllNote] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch("http://localhost:3000/api/getNote")
    .then( res => {return res.json()})
    .then(data => {
      setAllNote(data)
      setLoading(false)
    })
  },[])
  
  if(loading) return <div>Loading...</div>

  return (
   <div style={{display:"flex",width:"100%",height:"100vh",padding:"20px"}} >
        <h2>Notes</h2>
        <div>
        {allnote.length !== 0 ? allnote.map(note =>{
          return(
            <div key={note._id} 
            style={{
            bgcolor:"yellow",
            position:"relative",
            margin:2,
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            borderBottomRightRadius:20
            }}>
              
            <p>{note.title}</p>
            <p>{note.body}</p>
            <p>{new Date(note.remove_time).toLocaleTimeString()}</p>
            <p>{new Date(note.remove_time).toLocaleDateString()}</p>
                <Link href={`/notelist/${note._id}`}>
                  detail
                </Link>
            </div>
          )
        }): null}
        </div>
   </div>
  )
}
