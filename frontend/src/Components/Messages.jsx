import React, { useEffect } from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import useConversation from "../zustand/useConversation";
import useListenMessages from "../hooks/useListenMessages";


const Messages = () => {
  const { getMessages, loading } = useGetMessages();


  useListenMessages()
  const {
    selectedConversation,
    setSelectedConversation,
    messages,
    setMessages,
  } = useConversation();

  useEffect(() => {
    getMessages();
  }, [selectedConversation._id]);


  

  return (
    <div className="px-4 flex-1 overflow-auto">
    
{
        !loading &&  messages.length>0 && (

          messages.map((messageObject)=>{
           
            return(
            <Message key={messageObject?._id} message={messageObject}/>
            )
            

          })
          
  )
        
      
      }
      
    
        
          
        
      
    </div>
  );
};

export default Messages;
