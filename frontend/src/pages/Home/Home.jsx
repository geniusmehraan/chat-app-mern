import React from 'react'
import SideBar from '../../Components/SideBar'
import MessageContainer from '../../Components/MessageContainer'
const Home = () => {
  return (
    <div className='sm:h-[450px]  rounded-lg md:h-[500px] flex items-center justify-center   bg-clip-padding backdrop-filter  backdrop-blur-md overflow-hidden bg-opacity-20 bg-gray-400    '>
      <SideBar></SideBar>
      <MessageContainer></MessageContainer>
    </div>
  )
}

export default Home
