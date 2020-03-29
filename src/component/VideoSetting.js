import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

const VideoSetting = () => {
    const [title, setTitle] = useState('這是影片的標題')
    const [description, setDescription] = useState('這是影片的描述')
    const [type, setType] = useState('動作片')
    return (
        <div className="video-setting">
            <img className="img-demo" src="./asset/images/demo.jpg"/>
            <div className="video-setting-item">
                <span>影片預覽圖</span>
                <div className="btn">
                    <span>上傳圖片</span>
                </div>
            </div>
            <div className="video-setting-item">
                <span>影片標題：</span>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="這是影片的標題"/>
            </div>
            <div className="video-setting-item">
                <span>影片描述：</span>
                <input value={description} onChange={e => setDescription(e.target.value)} placeholder="這是影片的描述"/>
            </div>
            <div className="video-setting-item">
                <span>影片類型：</span>
                <input value={type} onChange={e => setType(e.target.value)} placeholder="影片類型"/>
            </div>
            <div className="btn">
                <Link className="router-link" to="/">更新</Link>
            </div>
        </div>
    )
}

export default VideoSetting