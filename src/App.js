import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import VideoBlock from './component/VideoBlock'
import VideoSetting from './component/VideoSetting'
import VideoDescription from './component/VideoDescription'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          <Link className="router-link" to="/">首頁</Link>
          <Link className="router-link" to="/video-block">影片清單</Link>
          <Link className="router-link" to="/video-block">劇情片</Link>
          <Link className="router-link" to="/video-block">動作片</Link>
          <Link className="router-link" to="/video-block">愛情片</Link>
        </div>
        <Switch>
          <Route path="/" exact={true} component={VideoBlock}/>
          <Route path="/video-block" exact={true} component={VideoBlock}/>
          <Route path="/video-setting" exact={true} component={VideoSetting}/>
          <Route path="/video-description" exact={true} component={VideoDescription}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
