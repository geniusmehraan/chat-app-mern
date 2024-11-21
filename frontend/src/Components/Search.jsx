import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoSearch } from "react-icons/io5";
import useGetConversation from '../hooks/useGetConversation';
import useConversation from '../zustand/useConversation';
const Search = () => {
  const {conversations}= useGetConversation();
  const {setSelectedConversation} = useConversation()

const [search,setsearch] = useState()
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(!search) return

    if(search.length<3){

      return toast.error("search should be greater than 3 charecters")

    }
    const conversation = conversations.find((n)=>n.fullname.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setsearch("")
    }else{
      toast.error("no user found")
    }
  }
  return (
    <div className='mb-4'>
      <form className='flex items-center gap-2' onSubmit={handlesubmit}>
      <input type="text" placeholder='Search Here' className='input input-bordered rounded-2xl bg-black' value={search} onChange={(e)=>setsearch(e.target.value)}/>
      <button className=' btn btn-circle bg-green-500 text-white '><IoSearch className='text-[20px]'/></button>
      </form>
    </div>
  )
}

export default Search
