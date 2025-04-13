import {useEffect, useState} from "react"
import toast from "react-hot-toast"
import useConversation from "../zustand/useConversation"

const useGetMessages = () => {
 const [loading,setloading] = useState(false)
 const {messages,setMessages,selectedConversation} = useConversation();


    const getMessages = async ()=>{
        setloading(true)
        try {
            const res = await fetch(`https://chat-app-ayaan.onrender.com/api/messages/${selectedConversation._id}`)
            
            const data = await res.json()
            
            
            if(data.error){
                throw new Error(data.error)
            }


            if(data.success == "false")
            setMessages([])
        else
            setMessages(data.messages)

            // console.log(messages)

            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setloading(false)
        }


    }
    
    return {getMessages,loading}

}

export default useGetMessages
