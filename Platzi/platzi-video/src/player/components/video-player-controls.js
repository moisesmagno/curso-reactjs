import React from 'react';
import './video-player-control.scss';

const VideoPlayerControls = (props) => {
  return (
    <div className="VideoPlayerControls">
      {props.children}
    </div>
  )
}

export default VideoPlayerControls;
