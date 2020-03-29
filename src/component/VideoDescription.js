import React from 'react';
import {
  Link
} from "react-router-dom";

const VideoDescription = () => {
    return (
        <div className="video-description">
            <div className="video-play-area">
                <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    width="560"
                    height="264"
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
            </div>
            <div className="video-description-item">
                <span>影片標題：</span>
                <span>這是影片的標題</span>
            </div>
            <div className="video-description-item">
                <span>影片描述：</span>
                <span>這是影片的描述</span>
            </div>
            <div className="video-description-item">
                <span>影片類型：</span>
                <span>動作片</span>
            </div>
            <div className="video-description-item">
                <span>影片長度：</span>
                <span>1小時20分</span>
            </div>
            <div className="btn-area">
                <div className="btn">
                    <Link className="router-link" to="/">回上頁</Link>
                </div>
                <div className="btn">
                    <Link className="router-link" to="/video-setting">影片設定</Link>
                </div>
            </div>
        </div>
    )
}

export default VideoDescription