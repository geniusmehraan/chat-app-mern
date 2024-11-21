import React from 'react'
    import { Link } from "react-router-dom";

const BottomGuide = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-between py-8'>

        <div>
            <h1 className='text-green-900 w-[900px] font-bold text-center'>Hello there, this is a realtime chat app. It will give you the feel of Whatsapp. You can talk to friends but first they have to make their account on this chat app.
            </h1>
        </div>

        <div className='w-full h-full flex gap-20 items-center justify-center'>
            <h1 className='text-black flex flex-col gap-8  p-2 rounded-md text-xl w-[40%]  font-semibold'>If you don't have make your account yet you can sign up to make your account on this chat app. <Link to={"/signup"}>
            <button className='w-full bg-green-600 p-2 rounded-full text-white'>SignUp</button></Link> </h1>
            <h1 className='text-black flex flex-col gap-8 w-[30%]  p-2 rounded-md font-semibold text-xl'>If you have made your account so welcome. You can login here.
            <Link to={"/login"}>
            <button className='w-full bg-gray-700 p-2 rounded-full text-white'>Login</button>
            </Link>
            </h1>
        </div>
      
    </div>
  )
}

export default BottomGuide
