
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div style={{width:300,boxShadow: 3,padding:2 }}>
        <Link href='/createnote'>Create note</Link>
        <Link href='/notelist'>note list</Link>
        <Link href='/'>home</Link>
           
    </div>
  )
}
