"use server"
import { get, post } from "../fetch"
import { Message } from "@/components/chat/chat-footer"

export const getMessages = async () => {
    const messages = await get("/messages", ["messages"])
    return messages
}

export const sendmessage = async (messages : Message[]) => {
   const response = await post(
    "/openai/chatCompletion",
    {messages}
   )
   return response
}