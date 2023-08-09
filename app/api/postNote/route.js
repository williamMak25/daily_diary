import { dbConnect } from '@/db/mogo'
import { Note } from '@/db/note'
import { NextResponse } from 'next/server'
import React from 'react'

dbConnect()

export async function POST(request) {

  const data= await request.json()
  const {title,body,removedate} = data

  let dateString = new Date(removedate)
  const remove_time = dateString.getTime()

  const newNote = await Note.create({
    title,
    body,
    remove_time
  })

  await newNote.save()

  return  NextResponse.json({message:"successfully created"},{status:201})
}
