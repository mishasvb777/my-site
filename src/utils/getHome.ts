import { BASE_URL } from '../api/urls'

export const getHomePage = async (): Promise<{
  message: string
  id: number
}> => {
  const res = await fetch(`${BASE_URL}/home`)
  const data = await res.json()
  return data
}

const displayData = async () => {
  const data = await getHomePage()
  console.log(data)
}

displayData()
