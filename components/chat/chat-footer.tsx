"use client"
import React from 'react'
import { Input } from '../ui/input'
import { LuSend } from "react-icons/lu";
import { sendmessage } from '@/lib/actions/messages';

type Props = {
  message : string
  setMessage : React.Dispatch<React.SetStateAction<string>>,
  messages : Message[],
  setMessages : React.Dispatch<React.SetStateAction<Message[]>>,
}

export type Message = {
  role : "user" | "assistant",
  content : string,
}


const ChatFooter = (props: Props) => {

  const handleMessage = async () => {
    props.setMessage("")
    const updatedMessages : Message[] = [
      ...props.messages,
      {
        role : 'user',
        content : props.message
      }
    ]
    props.setMessages(updatedMessages)
    const response = await sendmessage(updatedMessages)
    const returnedMessage : Message = response.choices[0]?.message
    props.setMessages([
      ...updatedMessages,
      returnedMessage
    ])

  }

  return (
    <div className='w-full bg-gray-800/50 border border-gray-700 px-4 py-4 flex items-center gap-2 rounded-b-lg'>
        <Input
         value={props.message} 
         placeholder='type a message'  
         type='text' 
         className='flex-1 rounded-full h-[40px]'
         onChange={(event) => props.setMessage(event.target.value)}
         onKeyDown={(event) => {
          if(event.key == "Enter"){
            handleMessage()
          }
         }}
         />
        <LuSend onClick={handleMessage} size={20} className='cursor-pointer text-white' />

    </div>
  )
}

export default ChatFooter