import React, { useEffect } from 'react'
import Messages from './Messages'
import MessagesInput from './MessagesInput'
import useConversation from '../zustand/useConversation'
import Backbutton from './Backbutton'
import { useSocketContext } from "../context/Socketcontext";
import { Authcontext, useAuthContext } from '../context/AuthContext'
const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();

  const {onlineUsers} = useSocketContext();

  const isonline = onlineUsers.includes(selectedConversation?._id)
 

  useEffect(()=>{
    return () => setSelectedConversation(null)
    
  },[setSelectedConversation])
  return (
    <div className=' bg-slate-800 con h-full border-yellow-400   md:min-w-[450px] flex  flex-col'>
      
      {
       
       !selectedConversation ? nochatseleted() : (
       <>
        <div className='bg-slate-500  flex items-center justify-between px-9 py-2'>
          <div>
        <span className='label-text text-lg'>To: </span>
        <span className='text-gray-400 font-bold'> {" "}{ selectedConversation.fullname}</span>
        <div className='text-[12px] text-center'>{isonline?<span>online</span>:""}</div>
        </div>
        <Backbutton></Backbutton>
      </div>

      
      
        <Messages />
      

      <MessagesInput />
      </>
       )
      }
      
      
     
    </div>
  )
}


export default MessageContainer


const nochatseleted = ()=>{
  const {authUser} = useAuthContext()

 

  return(
  <>
   <div className='flex h-full items-center justify-center flex-col'>

    <h1 className='text-2xl  text-white'>
      Welcome {authUser.data.username} ❄️
    
    </h1>

    <img src="/hii.gif" className='w-[200px] rounded-lg' /> 

    <span className='text-xl mt-2  rounded-full p'>Select a chat to start</span>
   </div>
  </>
  )
}


// // starter code for this file 

// import React from 'react'
// import Messages from './Messages'




// const MessageContainer = () => {
//   return (
//     <div className=' h-full border-yellow-400   md:min-w-[450px] flex  flex-col'>
      
//       <div className='bg-slate-500 px-2 flex items-center justify-center py-2'>
//         <span className='label-text text-lg'>To: </span>
//         <span className='text-gray-400 font-bold'>Ayaan Mehdi</span>
//       </div>

//       {/* This div is where scrolling should be enabled */}
      
//         <Messages />
      

//       {/* <MessagesInput /> */}
//     </div>
//   )
// }


// export default MessageContainer
