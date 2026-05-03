import React from 'react'

const videoCard = ({video}) => {

    const snippet = video.snippet;
    const statistics = video.statistics;

    if (!snippet) return null;

  return (
    <>
      <div>
        <img 
            className='thumabnail' 
            src={snippet.thumabnail.medium.url}
            alt="thumbnail" />
      </div>
      <div className='side-disc'>
        <div className='title_disc'>
            <h3 className="title">{snippet.title}</h3>
            <p className="channel">{snippet.channelTitle}</p>        
        </div>
        <div className='channel'>
            <p>{snippet.channelTitle}</p>
            <p>{statistics.viewCount} views</p>
        </div>
      </div>
    </>
  )
}

export default videoCard
