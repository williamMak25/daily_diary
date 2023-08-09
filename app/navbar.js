
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div style={{width:250,height:"100vh",boxShadow: 3,padding:2,display:"flex",
    flexDirection:"column",alignItems:"center",backgroundColor:"#454545"}}>
        <Link href='/createnote' style={{marginTop:50}}>Create Post</Link>
        <Link href='/notelist' style={{marginTop:50}}>Blog list</Link>
        <Link href='/' style={{marginTop:50}}>Home</Link>
           
    </div>
  )
}
