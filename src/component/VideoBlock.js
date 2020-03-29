import React from 'react';
import VideoItem from './VideoItem'

const VideoBlock = () => {
    return (
        <div className="video-block">
            <div className="video-area">
            <div className="video-list-title">熱門影片</div>
            <div className="video-list">
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
            </div>
            </div>
            <div className="video-area">
            <div className="video-list-title">最新影片</div>
            <div className="video-list">
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
            </div>
            </div>
            <div className="video-area">
            <div className="video-list-title">隨機選片</div>
            <div className="video-list">
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
            </div>
            </div>
        </div>
    )
}

export default VideoBlock