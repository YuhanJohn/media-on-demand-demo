import React from 'react';
import {
  Link
} from "react-router-dom";

const VideoDescription = props => {
    const { videoUrl, videoPic, videoTitle, videoDetail } = props.location.state
    return (
        <div className="video-description">
            <div className="video-play-area">
                <video
                    id="my-video"
                    className="video-js"
                    controls
                    preload="auto"
                    width="560"
                    height="264"
                    poster={`http://123.204.228.84:8082/${videoPic}`}
                    data-setup="{}"
                >
                    <source src={`http://123.204.228.84:8082/${videoUrl}`} type="video/mp4" />
                    {/* <source src="MY_VIDEO.webm" type="video/webm" /> */}
                    <p className="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                </video>
            </div>
            <div className="video-description-item">
                <span>影片標題：</span>
                <span>{videoTitle}</span>
            </div>
            <div className="video-description-item">
                <span>影片描述：</span>
                <span>{videoDetail}</span>
            </div>
            <div className="video-description-item">
                <span>影片類型：</span>
                <span>動作片</span>
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