import React from 'react';
import { useAuthContext } from "../context/AuthContext";
import useConversation from '../zustand/useConversation';

const Message = ({ message }) => {
    
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  
  const chatFromMe = message.senderID === authUser.data._id;
  const chatClassName = chatFromMe ? "chat-end" : "chat-start";
  const profilePic = chatFromMe ? authUser.data.profilepic : selectedConversation?.profilepic;
  const chatBubbleBg = chatFromMe ? "bg-blue-500" :"bg-gray-500";

 

  return (
    <>
    
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-8 rounded-full select-none'>
          <img src={profilePic} alt="user avatar" className='w-full' />
        </div>
      </div>
      <div className={`chat-bubble text-white ${chatBubbleBg}`}>
        {message.message}
       
      </div>
      <div className='text-gray-400 text-[12px] select-none'>
       
      </div>
    </div>
    </>
  );
};

export default Message;
