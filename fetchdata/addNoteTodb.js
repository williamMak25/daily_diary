import { useRouter } from 'next/router'
import React from 'react'

export default async function AddNoteTodb(note,removedate) {
    if(note && removedate){
        await fetch("http://localhost:3000/api/postNote",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                "title":note.title,
                "body":note.body,
                "removedate":removedate
            })
        })
    }else{
        throw new Error("cannot fetch undefined data")
    }
     

}
