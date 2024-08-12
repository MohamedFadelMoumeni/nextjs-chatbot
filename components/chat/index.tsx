"use client"
import React, { useEffect } from 'react'
import ChatFooter from './chat-footer'
import ChatHeader from './chat-header'
import ChatMessages from './chat-messages'
import { Message } from './chat-footer'

const  Chat = () => {
    const [messages, setMessages] = React.useState<Message[]>([])
    const [message , setMessage] = React.useState<string>("")
  return (
    <div className='w-full max-w-4xl flex flex-col h-[70%]'>
    <ChatHeader />
    <ChatMessages messages={messages} />
    <ChatFooter setMessages={setMessages} messages={messages} message={message} setMessage={setMessage} />
</div>
  )
}

export default Chat