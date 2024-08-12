import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { IoIosInformationCircleOutline } from "react-icons/io";


const ChatHeader = () => {
  return (
   <div className="w-full flex justify-between items-center  p-4 rounded-t-lg bg-gray-800/50 border border-gray-700 text-white" >
    <div className="flex items-center gap-4">
    <Avatar>
      <AvatarImage src="https://console.groq.com/favicon.ico" alt="@groq" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div className='flex flex-col '>
        <h3 className='font-medium text-sm'>Groq <span className='text-orange-600'>Cloud</span></h3>
        <p className='text-[12px] text-gray-300'>Free API.</p>
    </div>
    </div>
    <div className="flex items-center gap-4">
        <IoIosInformationCircleOutline  size={30} className='text-gray-300'/>
    </div>
   </div>
  )
}

export default ChatHeader