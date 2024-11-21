import React from 'react'
import useConversation from '../zustand/useConversation'

const Backbutton = () => {
   const {setSelectedConversation} = useConversation()
  return (
    <div>
      <button className='btn btn-primary' onClick={()=>setSelectedConversation(null)}>Back</button>
    </div>
  )
}

export default Backbutton
