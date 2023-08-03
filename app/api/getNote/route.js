
import { dbConnect } from '@/db/mogo'
import { Note } from '@/db/note'
import { NextResponse } from 'next/server'
import React from 'react'


export async function GET(request) {   
    dbConnect()
    const result = await Note.find()
    if(!result) return NextResponse.json({"message":"server is not connected"});
    
    return NextResponse.json(result)
  }
