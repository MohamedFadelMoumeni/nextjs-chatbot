"use client"
import React, { useEffect, useRef } from 'react'
import MessageContent from '../message/message-content'
import { Message } from './chat-footer'

type Props = {
  messages : Message[]
}

const ChatMessages = (props:Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current;
    if(container){
      container.scrollTop = container.scrollHeight;
    }

  }, [props.messages])
  return (
    <div ref={containerRef} className='w-full h-full overflow-y-auto text-white  px-4 py-8 flex flex-col gap-12 bg-gray-800'>
      {
        props.messages?.length > 0 ? props.messages.map((message, index) => (
          <MessageContent key={index} message={message} />
        )) : <h1 className='text-center italic'>No messages</h1>
      }
    </div>
  )
}

export default ChatMessages