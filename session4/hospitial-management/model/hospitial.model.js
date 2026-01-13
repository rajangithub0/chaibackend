import { mongoose } from 'mongoose';

const hospitialSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required
    },
    addressLine2:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specialized:[
        {
            type:String 
        }
    ]
},{timestamps:true})

export const Hospitial=mongoose.model("Hospitial",hospitialSchema)