import React from 'react'

export default async function AllfetchData() {
   const res = await fetch("http://localhost:3000/api/getNote",{cache:'no-store'})
    
    if(!res.ok) throw new Error("Something is wrong! Can't fetch data.")

    return res.json()

}
