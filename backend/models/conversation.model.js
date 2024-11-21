import mongoose from "mongoose";

const conversationschema = mongoose.Schema({
    participants:[{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages:[{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
    }],
    //crated at , updated at
},{timestamps:true});

const conversation = mongoose.model("Conversation",conversationschema);

export default conversation;