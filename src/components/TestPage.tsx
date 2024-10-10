import React, { useEffect, useState } from 'react'
import { getHomePage } from '../utils/getHome'

export const TestPage = () => {
  const [message, setMessage] = useState<string>('Initial Message')

  useEffect(() => {
    const displayData = async () => {
      const data = await getHomePage()
      setMessage(data.message)
    }

    const timeId = setTimeout(() => {
      displayData()
    }, 2000)

    return () => clearTimeout(timeId)
  }, [])

  return <div>{message}</div>
}
