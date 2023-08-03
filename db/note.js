const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema

const noteSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    remove_time:{
        type:Number,
        require:true
    }
},{timestamps:true})

export const Note = mongoose.models.Note || mongoose.model("Note",noteSchema)

