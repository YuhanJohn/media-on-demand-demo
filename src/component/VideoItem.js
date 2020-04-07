import React from 'react';
import {
  Link
} from "react-router-dom";

const VideoItem = props => {
    const { videoUrl, videoPic, videoTitle, videoDetail, videoViews } = props
    return (
        <div className="video-item">
            <video
                id="my-video"
                className="video-js"
                controls
                preload="auto"
                width="320"
                height="132"
                // poster="./asset/images/demo.jpg"
                poster={`http://123.204.228.84:8082/${videoPic}`}
                data-setup="{}"
            >
                <source src={`http://123.204.228.84:8082/${videoUrl}`} type="video/mp4" />
                {/* <source src="./asset/videos/demo.mp4" type="video/mp4" /> */}
                {/* <source src="MY_VIDEO.webm" type="video/webm" /> */}
                <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                </p>
            </video>
            <div className="video-info">
                <span className="video-title">{videoTitle}</span>
                <Link className="router-link" to={{
                    pathname: "/video-description",
                    state: {
                        videoUrl, 
                        videoPic, 
                        videoTitle,
                        videoDetail
                    }
                }}>觀看次數：{videoViews}</Link>
                {/* <span>觀看次數：{videoViews}</span> */}
            </div>
        </div>
    )
}

export default VideoItem