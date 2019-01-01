import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import { formattedTime } from '../../libs/utilities';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    lastVolume: 1,
    volumeMute: true
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = (props) => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = (props) => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({
      lastVolume: event.target.value
    })
  }

  handleVolumeClick = event => {
    this.setState({
      volumeMute: !this.state.volumeMute
    })

    if(this.state.volumeMute){
      this.video.volume = 0
    } else {
      this.video.volume = this.state.lastVolume
    }
  }

  handleFullScreenClick = event => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }

  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title
          title="Esto es un video chido!"
        />
        <VideoPlayerControls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            currentTime={this.state.currentTime}
            duration={this.state.duration}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeClick={this.handleVolumeClick}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </VideoPlayerControls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
