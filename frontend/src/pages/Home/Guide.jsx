import React from 'react'
import Header from '../../Components/header'
import BottomGuide from '../../Components/BottomGuide'

const Guide = () => {
  return (
    <div className='h-screen flex  justify-center bg-white w-full'>
      <div className='w-full flex flex-col items-center '>
        <Header/>
        <BottomGuide/>
        {/* <footer className='bg-[#a34f4f] flex items-center justify-between  w-full h-16 px-8 py-2'>
        <a href="">Gi</a>
         <a className='text-white text-xl' href="https://www.upwork.com/freelancers/~01c51655dc1215ff58?qpn-profile-completeness=education&nav_dir=pop">Upwork</a>
         
         <a href=""></a>
      </footer> */}
      </div>
      
    </div>
  )
}

export default Guide
