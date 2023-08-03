
import DeleteNotefetch from '@/fetchdata/deleteNotefetch'
import NoteDetailFetch from '@/fetchdata/noteDetail'
import { Box, Button, Stack, Typography } from '@mui/material'
import { notFound, useRouter } from 'next/navigation'
import React, { Suspense } from 'react'
import DeleteNote from './delete'

export default async function DeletePage({params}) {
    const id = params.id;
    const data = await NoteDetailFetch(id)

if(!id){
   return notFound()
}
  return (

    <Suspense fallback={<h2>Loading....</h2>}>
      <DeleteNote note={data}/>
    </Suspense>

  )
}
