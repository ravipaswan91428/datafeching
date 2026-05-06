import { useEffect, useState } from 'react'
import QuotesList from './conponents/QuotesList'

function App() {

  const [quotes, setQuotes] = useState([])

  useEffect(()=>{
    fetch('https://api.freeapi.app/api/v1/public/quotes')
    .then((res)=> res.json())
    .then((data)=>{
      setQuotes(data.data.data)
      console.log(data.data.data)
    })
  },[])
  

  return (
    <>
    <h1>Quotes of the day</h1>
      <QuotesList quotes={quotes}/>
    </>
  )
}

export default App
