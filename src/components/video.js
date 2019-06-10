import React from "react"
import videoStyles from './center.module.scss'

const fullScreenStyle = {
  width: '100%',
  height: '100%'
};

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className={videoStyles.videoContainer}>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        style={fullScreenStyle}
      />
    </div>
  )

  export default Video