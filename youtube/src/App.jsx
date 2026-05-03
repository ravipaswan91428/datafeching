import { useEffect, useState } from 'react'
import VideoList from './components/VideoList'

function App() {
  const [video, setVideo] = useState([])

  useEffect(()=>{
    fetch('https://api.freeapi.app/api/v1/public/youtube/videos')
    .then((res)=>res.json())
    .then((data)=>{
      setVideo(data.data.data)
      console.log(data)
    })
  },[])

  return (
    <>
      <h1>Youtube Clone</h1>
      <VideoList  video={video} />
    </>
  )
}

export default App
