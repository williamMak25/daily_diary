
import { dbConnect } from '@/db/mogo'
import { Note } from '@/db/note'
import { NextResponse } from 'next/server'
import React from 'react'


export async function GET(request) { 
  dbConnect()
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    if(id){
     const filterNode = await Note.findById(id)
      return NextResponse.json(filterNode)
    }
    const result = await Note.find()
    if(!result) return NextResponse.json({"message":"data base is not connected"});
    
    return NextResponse.json(result)
  }
