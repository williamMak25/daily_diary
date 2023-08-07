import { useRouter } from 'next/navigation'
import React from 'react'


export default async function DeleteNotefetch(id) {
    try{
      if(!id){
        throw new Error("Please provide the vaild id")
      }
      else{
      await fetch("http://localhost:3000/api/deleteNote",{
              method:"DELETE",
              headers:{"Content-Type":"Application/json"},
              body:JSON.stringify({"id": id})})
    }
    }
    catch(err){
      console.log(err)
    }
    

}

