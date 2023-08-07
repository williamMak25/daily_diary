import { NextResponse } from 'next/server';
import React from 'react'

export function middleware(request) {
 //console.log("middleware");
 //console.log(request.method);
 //console.log(request.url);
 //const origin = request.headers.get("origin")
 //console.log(origin);

 return NextResponse.next()
}
