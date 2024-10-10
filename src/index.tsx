import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css' // Импортируйте стили, если они есть
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
