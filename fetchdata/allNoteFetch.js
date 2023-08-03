import React from 'react'

export default async function AllNoteFetch() {

    const res = await fetch("http://localhost:3000/api/getNote",{ next: { revalidate: 1,caches:"no-store" }})

    if(!res.ok) throw new Error("Something is wrong")

    return res.json()
 
}
