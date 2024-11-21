import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../hooks/useSendMessage';
import toast from 'react-hot-toast';
const MessagesInput = () => {
  const [message,setmessage] = useState("")
  const {sendMessage,loading} = useSendMessage()

  const handleSubmit = async (e)=>{
e.preventDefault()

if(!message){
  toast.error("message can't be empty ")
  return
}

await sendMessage(message) 

const audio = new Audio("/tune.mp3")

audio.play()

setmessage("")

  }
  return (
    
    <div className='flex w-full   py-2 items-center justify-center'>
      
      <form className='relative text-center' onSubmit={handleSubmit}>
        <div className='flex items-center justify-end '>
      <input type="text" placeholder='Search Here' className='w-[420px] px-2 input py-2 text-[17px] mr-2 rounded-md' value={message} onChange={(e)=>setmessage(e.target.value)}/>
      {loading ? (<span className="loading loading-spinner"/>):
      (
        <button type='submit' className=' absolute  right-3   text-white '><IoIosSend className='text-[25px]'/></button>
      )}
      </div>
      </form>
    </div>
  )
}

export default MessagesInput
