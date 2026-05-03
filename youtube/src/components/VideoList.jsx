import React from 'react'
import VideoCard from './VideoCard'

const VideoList = ({ video }) => {
  return (
    <div className='video-container'>
      {video.map((videos) => {
        <VideoCard 
          key={video.id} 
          video={video} 
        />
    })}
    </div>
  )
}

export default VideoList
