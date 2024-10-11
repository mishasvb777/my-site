import { Typography } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  width: 450px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  border-radius: 10px;
  margin: 168px auto;
  box-shadow: 1px 6px 28px rgb(165 182 160);
`
export const Chat = styled.div`
  margin: 168px auto;
  display: flex;
  flex-direction: column;
  width: 450px;
  justify-content: space-between;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 1px 6px 28px rgb(165 182 160);
`
export const ChatForm = styled.form`
  margin: auto;
  display: flex;
  justify-content: space-between;
`

export const ChatList = styled.ul`
  margin: auto;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 400px;
  width: 82%;
  margin: 20px 0;
  list-style-type: none;
`

export const ChatListLi = styled.li`
  white-space: normal;
  word-wrap: break-word;
  margin: 10px 0;
`

export const ChatMessage = styled.span`
  margin: 10px 0;
  font-size: 18px;
`

export const ChatListUserName = styled(Typography)`
  background-color: #98c498;
`

export const ChatListUserNameGuest = styled(Typography)`
  background-color: #ffbdbd;
`
