import React from 'react';
import {
  Link
} from "react-router-dom";

const VideoItem = () => {
    return (
        <div className="video-item">
            <video
                id="my-video"
                class="video-js"
                controls
                preload="auto"
                width="320"
                height="132"
                poster="./asset/images/demo.jpg"
                data-setup="{}"
            >
                <source src="./asset/videos/demo.mp4" type="video/mp4" />
                <source src="MY_VIDEO.webm" type="video/webm" />
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank"
                    >supports HTML5 video</a
                    >
                </p>
            </video>
            <div className="video-info">
                <span className="video-title">影片標題</span>
                <Link className="router-link" to="/video-description">影片資訊</Link>
            </div>
        </div>
    )
}

export default VideoItem