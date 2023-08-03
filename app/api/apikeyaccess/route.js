import { NextResponse } from 'next/server';
import React from 'react'

export async function POST(request) {
    const data = await request.json();
   const header = await request.headers
   const clientKey = header.get("api-key")
 
console.log(data.id)
    if(!data.id) return NextResponse.json({"message":"please provide id"})

   const res = await fetch("http://localhost:3000/api/hello",{
        method:"GET",
        headers:{
            "Content-Type":"Application/json",
            "API-KEY": clientKey
        }
    })
    const resdata = await res.json()
    if(!resdata) return NextResponse.json({"message":"user invalaid"})

   return NextResponse.json(resdata)
}
