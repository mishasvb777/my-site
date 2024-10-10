const PORT = 3000

const BASE_URL = `http://194.58.114.13:${PORT}`

const getHomePage = async () => {
  const res = await fetch(`${BASE_URL}/home`)
  const data = await res.json()
  return data
}

const displayData = async () => {
  const data = await getHomePage()
  console.log(data)
}

displayData()
