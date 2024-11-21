import mongoose from "mongoose";

const messageschema = mongoose.Schema({
    senderID:{
        ref:"User",
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    recivedID:{
        ref:"User",
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    message:{
        required:true,
        type:String
    }
    //crated at , updated at
},{timestamps:true});

const message = mongoose.model("Message",messageschema);

export default message;