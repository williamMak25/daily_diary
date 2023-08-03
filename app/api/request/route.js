import { NextResponse } from 'next/server'
import React from 'react'

export async function GET(request) {
const {searchParams} = new URL(request.url)
const obj = Object.fromEntries(searchParams.entries())

//const name = searchParams.get("name")
  return NextResponse.json(obj)
}
