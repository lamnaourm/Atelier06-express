import { Schema, model } from "mongoose";

const DirectorSchema = Schema({
    name:{type:String, required:true, unique:true},
    birthname:String,
    birthdate:Date,
    birthplace:String,
})

export default model('director', DirectorSchema)