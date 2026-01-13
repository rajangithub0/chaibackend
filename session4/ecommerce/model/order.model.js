import  mongoose  from 'mongoose';

//order stureture
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})


const OrderSchema=new mongoose.Schema({
    orderprice:{
        type:Number,
        required:true
    },
    customer:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",  
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCEL","DELIVERED"],
        default:"PENDING"
    }
},{timestamps:true})

export const Order=mongoose.model("Order",OrderSchema)