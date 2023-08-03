import mongoose from "mongoose";

export const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then( res => {
        console.log("data base connected")
    })
    .catch(err => console.log(err))
}

    
