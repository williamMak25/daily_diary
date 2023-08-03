import React from 'react'

export default async function DeleteNotefetch(id) {
    if(!id){
        return
    }else{
    await fetch("http://localhost:3000/api/deleteNote",{
    method:"DELETE",
    headers:{"Content-Type":"Application/json"},
    body:JSON.stringify({
      "id": id
    })
  },{ next: { revalidate: 10 } })}
}
