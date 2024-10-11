import React from 'react'
import { Container } from '@mui/material'
import { Main } from './components/Main'

export const App: React.FC = () => {
  return (
    <Container fixed>
      <Main />
    </Container>
  )
}
