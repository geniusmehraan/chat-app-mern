import React from 'react'
import Search from './Search'
import Conversation from './Conversation'
import Logoutbutton from './Logoutbutton'
import {  useAuthContext } from '../context/AuthContext'

const SideBar = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex flex-col items-start justify-between px-2 py-2 pt-4  bg-clip-padding backdrop-filter  backdrop-blur-md overflow-hidden bg-opacity-20 bg-gray-400   h-full rounded-tl-lg rounded-bl-lg'>
        
   <Search></Search>

   
   <Conversation></Conversation> 


<div className='flex w-full items-center  bg-black hover:bg-red-600 rounded m-1  gap-2'>

 <Logoutbutton/>


<img src={authUser.data.profilepic}  className="w-[40px]" alt="" />


<div>

  <p> {authUser.data.fullname}
    </p> 

    <p className='text-[12px]'>@{authUser.data.username}</p>
</div>


</div>

  
    </div>
  )
}

export default SideBar
