import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getrecivedSocketId, SocketServer } from "../socket/socket.js";




export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    

    const { id: recivedID } = req.params;

    const senderID = req.user._id;


    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, recivedID] },
    });

    if (!conversation) {
      console.log("CREATING THE CONVO");

      conversation = await Conversation.create({
        participants: [senderID, recivedID],
      });
    }

    const newMessage = new Message({
      senderID: senderID,
      recivedID: recivedID,
      message: message,
    });

  

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(),newMessage.save()]);
   
    const reciversocketId = getrecivedSocketId(recivedID);

    if(reciversocketId){
      SocketServer.to(reciversocketId).emit("newMessage",newMessage);
    }

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("internal d error:", error.message);
    return res.json({ error: `internal server error ${error.message}` }).status(500);
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderID = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [userToChat,senderID ] },
    }).populate("messages");

    if (!conversation) 
     return res.status(200).json({success:"false",message:"no message"});

    const messages = conversation.messages ;

    // console.log(messages)

    return res.status(200).json({success:"true",messages:messages});

    
  } catch (error) {
    console.log("internal d error:", error.message);
    return res.json({error:"internal d error"}).status(500);
  }
};
