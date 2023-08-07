import { dbConnect } from '@/db/mogo';
import { Note } from '@/db/note';
import { NextResponse } from 'next/server';
import React from 'react'

dbConnect()
export async function DELETE(request) {
  const {searchParams}= new URL(request.url)
  const id = searchParams.get("id")
  console.log(id)
 
if(!id) return NextResponse.json({"message":"id required"})

await Note.findByIdAndRemove(id)

return NextResponse.json({"message":"successfully deleted"})
}
