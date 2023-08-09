import { dbConnect } from '@/db/mogo';
import { Note } from '@/db/note';
import { NextResponse } from 'next/server';
import React from 'react'


export async function DELETE(request) {
  const {searchParams}= new URL(request.url)
  const id = searchParams.get("id")
if(!id) return NextResponse.json({"message":"id required"})
await dbConnect()
await Note.findByIdAndRemove(id)

return NextResponse.json({message:"successfully deleted"},{status:201})
}
