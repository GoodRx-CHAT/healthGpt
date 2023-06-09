import { ChatRoom } from 'components/ChatRoom/ChatRoom'
import Hearty from './Hearty'
import { useState } from 'react'

export const ChatBubble = () => {
  const [chatActive, setChatActive] = useState(false)

  const toggleChatRoom = (e: any) => {
    e.preventDefault()
    console.log('toggleChatRoom')
    setChatActive(!chatActive)
  }

  return (
    <>
      <ChatRoom />
      <Hearty onClick={(e) => toggleChatRoom} />
    </>
  )
}
