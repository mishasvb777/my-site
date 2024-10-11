import { Button, TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { socket, ChatWindow } from './ChatWindow'
import { Container } from './styled'

export const Main = () => {
  const [inputValue, setInputValue] = useState('')
  const [userName, setUserName] = useState('')
  const [userNameList, setUsernameList] = useState<string[]>([])

  useEffect(() => {
    const userName = localStorage.getItem('username')

    if (userName) {
      setUserName(userName)
    }
  }, [])

  useEffect(() => {
    socket.on('username', (userNameList) => {
      setUsernameList((prevList) => [...prevList, ...userNameList])
    })

    return () => {
      socket.off('username')
    }
  }, [])

  const handleInputValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value)
  }

  const handleUserName = () => {
    localStorage.setItem('username', inputValue)
    socket.emit('username', inputValue)
    setUserName(inputValue)
  }

  return (
    <>
      {!userName ? (
        <Container>
          <TextField
            id="outlined-required"
            placeholder="Введите имя"
            onChange={handleInputValue}
          />

          <Button variant="contained" onClick={handleUserName}>
            Войти
          </Button>
        </Container>
      ) : (
        <>
          <ul style={{ listStyleType: 'none' }}>
            {userNameList.map((userName) => (
              <li style={{ fontSize: '20px' }}>{userName}</li>
            ))}
          </ul>

          <ChatWindow userName={userName} />
        </>
      )}
    </>
  )
}
