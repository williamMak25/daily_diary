import React from 'react'

export default async function NoteDetailFetch(id) {
  const res = await fetch(`http://localhost:3000/api/getNote?id=${id}`,{cache:"no-store"});

  if(!res) throw new Error("data not found");

  return res.json()

}
