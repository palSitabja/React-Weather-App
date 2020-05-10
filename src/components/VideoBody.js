import React from 'react'
const VideoBody=()=>{
    return(
        <div>
        <div className="color-overlay"></div>
        <video className="video-bg" autoPlay loop muted>
            <source src="./video/cloudy.mp4" type="video/mp4"></source>
        </video>
        </div>
    )
}
export default VideoBody