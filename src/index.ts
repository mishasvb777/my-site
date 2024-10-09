const getHomePage = async () => {
  const res = await fetch('http://lm-test-page.ru/home')
  const data = await res.json()
  return data
}

const displayData = async () => {
  const data = await getHomePage()
  console.log(data)
}

displayData()
