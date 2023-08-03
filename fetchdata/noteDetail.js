import React from 'react'

export default async function NoteDetailFetch(id) {
  const res = await fetch(`/api/getNote?${id}`);

  if(!res) throw new Error("data not found");

  return res.json()

}
