import { dbConnect } from '@/db/mogo'
import { Note } from '@/db/note'
import { NextResponse } from 'next/server'
import React from 'react'

export async function PUT(request) {
  dbConnect()
  const {searchParams} = new URL(request.url)
  const id = searchParams.get("id")
  const reqbody = await request.json()
  const {title,body} = reqbody
  
  await Note.findByIdAndUpdate(id,{title,body})
  .catch( err => {
    if(err) return NextResponse.json({status:401},{message:"something is wrong"})
  })

return NextResponse.json({message:"Successfully updated"},{status:200})
}
