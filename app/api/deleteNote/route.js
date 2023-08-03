import { dbConnect } from '@/db/mogo';
import { Note } from '@/db/note';
import { NextResponse } from 'next/server';
import React from 'react'

dbConnect()
export async function DELETE(request) {
  const {id} = await request.json();
 
if(!id) return NextResponse.json({"message":"id required"})

await Note.findByIdAndRemove(id)

return NextResponse.json({"message":"successfully deleted"})
}
