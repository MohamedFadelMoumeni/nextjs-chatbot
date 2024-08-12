import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,

  } from "@/components/ui/avatar"
import { Message } from '../chat/chat-footer'
import { formatDate } from '@/lib/utils'

type Props = {
    message : Message
}  

const MessageContent = (props : Props) => {
    const isUser = props.message.role === 'user'
    const avatar = props.message.role === "user" ? "https://github.com/shadcn.png":"https://console.groq.com/favicon.ico"
  return (
   <div className={`relative w-full  flex flex-col gap-2 ${isUser ? "items-start" :"items-end"}`}>
    <div className={`w-full  flex ${isUser ? "justify-start":"justify-end"}`}>
     <div className={`flex items-center ${!isUser && "flex-row-reverse"} gap-4`}>
    <Avatar>
      <AvatarImage src={avatar} alt="@user" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div className='bg-gray-900 p-3 text-[13px] max-w-3xl rounded-lg'>
        {props.message.content}
    </div>
    </div>
   </div>
   <p className=' text-[11px] text-gray-400'>{formatDate(new Date())}</p>
   </div>
  )
}

export default MessageContent