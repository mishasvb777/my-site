import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { getHomePage } from '../utils/getHome'
import { Button, TextField, Typography } from '@mui/material'
import { io } from 'socket.io-client'
import {
  Chat,
  ChatForm,
  ChatList,
  ChatListLi,
  ChatListUserName,
  ChatListUserNameGuest,
  ChatMessage,
} from './styled'

export const socket = io('http://localhost:3000')

type Message = {
  id: number
  message: string
  userName: string
}

type TestPageProps = {
  userName: string
}

export const ChatWindow = ({ userName }: TestPageProps) => {
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    socket.on('chat message', (data) => {
      setMessages((prev) => [
        ...prev,
        { message: data.msg, id: messages.length, userName: data.userName },
      ])
    })

    return () => {
      socket.off('chat message')
    }
  }, [])

  const handleSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (message) {
      socket.emit('chat message', { userName, msg: message })
      setMessage('')
    }
  }

  const handleChangeMessage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value)
  }

  return (
    <Chat>
      <Typography variant="h4" style={{ margin: 'auto' }}>
        Привет, {userName}
      </Typography>
      <ChatList>
        {messages.map((msg) => {
          return msg.userName === userName ? (
            <ChatListLi key={msg.id}>
              <ChatListUserName>{msg.userName}</ChatListUserName>
              <ChatMessage>{msg.message}</ChatMessage>
            </ChatListLi>
          ) : (
            <ChatListLi key={msg.id}>
              <ChatListUserNameGuest>{msg.userName}</ChatListUserNameGuest>
              <ChatMessage>{msg.message}</ChatMessage>
            </ChatListLi>
          )
        })}
      </ChatList>

      <ChatForm onSubmit={handleSubmitMessage}>
        <TextField
          id="outlined-required"
          placeholder="Введите сообщение..."
          onChange={handleChangeMessage}
          value={message}
        />
        <Button type="submit" variant="contained">
          Отправить
        </Button>
      </ChatForm>
    </Chat>
  )
}
