import { useEffect, useState } from 'react'
import CatList from './components/catList.jsx'

function App() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('https://api.freeapi.app/api/v1/public/cats')
      .then((res) => res.json())
      .then((data) => {
        setCats(data.data.data)
        console.log(data.data.data)
      })
  }, [])

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>List of Cats</h1>
        <p>A gentle gallery of cat breeds with natural colors and clean card styling.</p>
      </header>
      <CatList cats={cats} />
    </main>
  )
}

export default App
