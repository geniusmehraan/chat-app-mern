import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between p-4 px-16 h-16 bg-black'>
      <div className='flex items-center gap-[10px]  '>
      <img src="/favi.png" alt="" className='w-12 h-12 rounded-full'/>
      <h1 className='text-2xl'>Bow</h1>
      </div>
      <div>
        <img src="/mehraan.jpeg" alt="" className='w-10 h-10 rounded-full'/>
      </div>
    </div>
  )
}

export default Header
