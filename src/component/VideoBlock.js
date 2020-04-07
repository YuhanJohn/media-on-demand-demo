import React, { useState, useEffect } from 'react';
import VideoItem from './VideoItem'

const VideoBlock = () => {
    const [videosMostViews, setVideosMostViews] = useState([])
    const [videosNewest, setVideosNewest] = useState([])
    const [videosRandom, setVideosRandom] = useState([])

    useEffect(()=>{
        fetch('http://123.204.228.84:8082/api/videos_most_views',{
            method: 'get',
            'content-type': 'application/json'
        })
        .then(res=>res.json())
        .then(res=>{
            setVideosMostViews(res)
            console.log(res)
        })
    }, [])

    useEffect(()=>{
        fetch('http://123.204.228.84:8082/api/videos_newest',{
            method: 'get',
            'content-type': 'application/json'
        })
        .then(res=>res.json())
        .then(res=>{
            setVideosNewest(res)
            console.log(res)
        })
    }, [])

    useEffect(()=>{
        fetch('http://123.204.228.84:8082/api/videos_random',{
            method: 'get',
            'content-type': 'application/json'
        })
        .then(res=>res.json())
        .then(res=>{
            setVideosRandom(res)
            console.log(res)
        })
    }, [])

    useEffect(()=>{
        fetch('http://123.204.228.84:8082/api/video_types',{
            'method': 'get',
            'content-type': 'application/json'
        })
        .then(res=>res.json())
        .then(res=>{
            setVideosNewest(res)
            console.log(res)
        })
    }, [])

    return (
        <div className="video-block">
            <div className="video-area">
            <div className="video-list-title">熱門影片</div>
            <div className="video-list">
                {
                    ( videosMostViews.length !== 0)
                    ? videosMostViews.map(videoItem => {
                        const { id, uri, video_cover_url, title, video_detail, video_views} = videoItem
                        return (<VideoItem 
                            key={id}
                            videoUrl={uri} 
                            videoPic={video_cover_url}
                            videoTitle={title}
                            videoDetail={video_detail}
                            videoViews={video_views}
                            {...videoItem}
                            />)
                    })
                    : null
                }
            </div>
            </div>
            <div className="video-area">
            <div className="video-list-title">最新影片</div>
            <div className="video-list">
                {
                    ( videosNewest.length !== 0)
                    ? videosNewest.map(videoItem => {
                        const { id, uri, video_cover_url, title, video_detail, video_views} = videoItem
                        return (<VideoItem 
                            key={id}
                            videoUrl={uri} 
                            videoPic={video_cover_url}
                            videoTitle={title}
                            videoDetail={video_detail}
                            videoViews={video_views}
                            {...videoItem}
                            />)
                    })
                    : null
                }
            </div>
            </div>
            <div className="video-area">
            <div className="video-list-title">隨機選片</div>
            <div className="video-list">
                {
                    ( videosRandom.length !== 0)
                    ? videosRandom.map(videoItem => {
                        const { id, uri, video_cover_url, title, video_detail, video_views} = videoItem
                        return (<VideoItem 
                            key={id}
                            videoUrl={uri} 
                            videoPic={video_cover_url}
                            videoTitle={title}
                            videoDetail={video_detail}
                            videoViews={video_views}
                            {...videoItem}
                            />)
                    })
                    : null
                }
            </div>
            </div>
        </div>
    )
}

export default VideoBlock