import React from 'react'
import useConversation from '../zustand/useConversation'
import { useSocketContext } from "../context/Socketcontext";
const Conversations = (props) => {
const {conversationt,lastidx,emoji} = props
const {selectedConversation,setSelectedConversation} = useConversation();

const isSeleted = selectedConversation?._id === conversationt._id;

const {onlineUsers} = useSocketContext();

 const isonline = onlineUsers.includes(conversationt._id)


  return (
    <>
    <div className={`flex mt-3 p-2 hover:bg-green-300 cursor-pointer  w-full items-center justify-start gap-2 rounded-lg ${isSeleted ? "bg-green-300":""}`} onClick={() => setSelectedConversation(conversationt)}>
      <div className={`avatar w-6 h-6 ${isonline?"online":""}`}>
        <img src={conversationt.profilepic} alt="user avatar" className='w-full h-full rounded-full'/>
      </div>  
      <div>
        <h2 className='font-bold text-xl text-white'>{conversationt.fullname}</h2>
      </div>
      <div>{emoji}</div>
    </div>
    {!lastidx&&<div className='divider h-[0.1px] bg-gray-500'></div>}
    
    </>
    
    
  )
   
}

export default Conversations
