import React from 'react';
import './video-player-layout.scss';

const VideoPlayerLayout = (props) => (
  <div className="VideoPlayer">
    {props.children}
  </div>
)

export default VideoPlayerLayout;
