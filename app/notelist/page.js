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
   <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100vh"}} >
        <h2 style={{backgroundColor:"gray",padding:"20px"}}>Blogs</h2>
        <div style={{padding:"20px",overflow:"auto"}}>
        {allnote.length !== 0 ? allnote.map(note =>{
          return(
            <>
            <div key={note._id} 
            style={{
            position:"relative",
            margin:2,
            marginBottom:5
            }}>
            
            <h2>{note.title}</h2>
            {/*<span style={{fontSize:10}}>{new Date(note.remove_time).toLocaleTimeString()}</span>*/}
            <span style={{fontSize:10}}>{new Date(note.remove_time).toLocaleDateString()}</span>
            <p style={{marginTop:5,marginBottom:5}}>{note.body.slice(0, 20)}...</p>
            
                <Link href={`/notelist/${note._id}`} style={{color:"blue",display:"block"}}>
                  more..
                </Link>
            </div>
            <hr style={{marginBottom:10}}/>
            </>
          )
        }): null}
        </div>
   </div>
  )
}
